import { NextRequest, NextResponse } from 'next/server';
import puppeteer from "puppeteer";
import { scrapeMamikosLink } from "@/lib/scraper/mamikos";
import { scrapeCoveLink } from "@/lib/scraper/cove";
import { scrapeRukitaLink } from "@/lib/scraper/rukita";
import { checkHostname, getAveragePrice, getHighestPrice, getLowestPrice } from '@/lib/utils/functions';
import { site } from "@/lib/utils/constants";
import { connectToDB } from '@/config/mongoose';
import Room from "@/models/room.model"

export async function POST(req: NextRequest) {
  const { url } = await req.json();  

  if (!url) {
    return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });
  }

  const hostname = checkHostname(url);
  if (!hostname) {
    return NextResponse.json({ error: "Unsupported hostname" }, { status: 400 });
  }

  let browser;
  try {
    await connectToDB();

    browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    let scrapedRooms;
    switch (hostname) {
      case site.mamikos:
        scrapedRooms = await scrapeMamikosLink(url, page);
        break;
      case site.cove:
        scrapedRooms = await scrapeCoveLink(url, page);
        break;
      case site.rukita:
        scrapedRooms = await scrapeRukitaLink(url, page);
        break;
      default:
        throw new Error("Unsupported site");
    }

    if (scrapedRooms && scrapedRooms.length > 0) {
      for (const scrapedRoom of scrapedRooms) {
        const existingRoom = await Room.findOne({ url: scrapedRoom.url, title: scrapedRoom.title });
        
        let room;
  
        if (existingRoom) {
          const updatedPriceHistory = [
            ...existingRoom.priceHistory,
            { price: scrapedRoom.currentPrice, date: new Date() }
          ];

          room = {
            ...scrapedRoom,
            priceHistory: updatedPriceHistory,
            lowestPrice: getLowestPrice(updatedPriceHistory),
            highestPrice: getHighestPrice(updatedPriceHistory),
            averagePrice: getAveragePrice(updatedPriceHistory),
          };
        } else {
          const priceHistory = [{ price: scrapedRoom.currentPrice, date: new Date() }];

          room = {
            ...scrapedRoom,
            priceHistory,
            lowestPrice: getLowestPrice(priceHistory),
            highestPrice: getHighestPrice(priceHistory),
            averagePrice: getAveragePrice(priceHistory),
          };
        }

        await Room.findOneAndUpdate(
          { url: scrapedRoom.url, title: scrapedRoom.title },
          room,
          { upsert: true, new: true }
        );
      }
    }

    return NextResponse.json({ scrapedRooms });
  } catch (error: any) {
    console.error(`Failed to scrape: ${error.message}`);
    return NextResponse.json({ error: "Failed to scrape" }, { status: 500 });
  } finally {
    if (browser) await browser.close();
  }
}
