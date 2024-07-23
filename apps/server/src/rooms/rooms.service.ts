import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomInterface } from '@server/models/room.model';
import { LinkDto } from '@server/utils/dto';
import puppeteer from 'puppeteer';
import { site } from '@server/utils/constants';
import scraper from '@server/utils/scraper';
import {
  checkHostname,
  getAveragePrice,
  getHighestPrice,
  getLowestPrice,
} from '@server/utils/functions';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel('Room') private readonly roomModel: Model<RoomInterface>,
  ) {}

  async scrapeAndStore(link: LinkDto) {
    const url = link.uri;
    if (!url) {
      throw new BadRequestException('Missing URL parameter');
    }

    const hostname = checkHostname(url);
    if (!hostname) {
      throw new BadRequestException('Unsupported hostname');
    }

    let browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
      });

      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2' });

      let scrapedRooms;
      switch (hostname) {
        case site.mamikos:
          scrapedRooms = await scraper.scrapeMamikosLink(url, page);
          break;
        case site.cove:
          scrapedRooms = await scraper.scrapeCoveLink(url, page);
          break;
        case site.rukita:
          scrapedRooms = await scraper.scrapeRukitaLink(url, page);
          break;
        default:
          throw new Error('Unsupported site');
      }

      if (scrapedRooms && scrapedRooms.length > 0) {
        for (const scrapedRoom of scrapedRooms) {
          const existingRoom = await this.roomModel.findOne({
            url: scrapedRoom.url,
            title: scrapedRoom.title,
          });

          let room;

          if (existingRoom) {
            const updatedPriceHistory = [
              ...existingRoom.priceHistory,
              { price: scrapedRoom.currentPrice, date: new Date() },
            ];

            room = {
              ...scrapedRoom,
              priceHistory: updatedPriceHistory,
              lowestPrice: getLowestPrice(updatedPriceHistory),
              highestPrice: getHighestPrice(updatedPriceHistory),
              averagePrice: getAveragePrice(updatedPriceHistory),
            };
          } else {
            const priceHistory = [
              { price: scrapedRoom.currentPrice, date: new Date() },
            ];

            room = {
              ...scrapedRoom,
              priceHistory,
              lowestPrice: getLowestPrice(priceHistory),
              highestPrice: getHighestPrice(priceHistory),
              averagePrice: getAveragePrice(priceHistory),
            };
          }

          await this.roomModel.findOneAndUpdate(
            { url: scrapedRoom.url, title: scrapedRoom.title },
            room,
            { upsert: true, new: true },
          );
        }
      }
      return { success: true };
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
