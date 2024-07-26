"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsService = void 0;
const child_process_1 = require("child_process");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const puppeteer_1 = require("puppeteer");
const constants_1 = require("../utils/constants");
const scraper_1 = require("../utils/scraper");
const functions_1 = require("../utils/functions");
let RoomsService = class RoomsService {
    constructor(roomModel) {
        this.roomModel = roomModel;
    }
    async getRecents() {
        try {
            const recents = await this.roomModel
                .find()
                .sort({ createdAt: -1 })
                .limit(8);
            return recents;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getResults(location) {
        console.log("Location " + location);
        try {
            const results = await this.roomModel.find({
                location: { $regex: new RegExp(location, 'i') },
            });
            const py = (0, child_process_1.spawn)('py', ["./src/utils/python/process_data.py"]);
            py.stdin.write(JSON.stringify(results));
            py.stdin.end();
            const result = new Promise((resolve, reject) => {
                let output;
                py.stdout.on('data', (data) => {
                    output = JSON.parse(data);
                });
                py.stderr.on('data', (data) => {
                    console.error(`[python] Error occured: ${data}`);
                    reject(`Error occured`);
                });
                py.on('exit', (code) => {
                    console.log(`Child process exited with code ${code}`);
                    resolve(output);
                });
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async scrapeAndStore(link) {
        const url = link.uri;
        if (!url) {
            throw new common_1.BadRequestException('Missing URL parameter');
        }
        const hostname = (0, functions_1.checkHostname)(url);
        if (!hostname) {
            throw new common_1.BadRequestException('Unsupported hostname');
        }
        let browser;
        try {
            browser = await puppeteer_1.default.launch({
                headless: true,
            });
            const page = await browser.newPage();
            await page.goto(url, { waitUntil: 'networkidle2' });
            let scrapedRooms;
            switch (hostname) {
                case constants_1.site.mamikos:
                    scrapedRooms = await scraper_1.default.scrapeMamikosLink(url, page);
                    break;
                case constants_1.site.cove:
                    scrapedRooms = await scraper_1.default.scrapeCoveLink(url, page);
                    break;
                case constants_1.site.rukita:
                    scrapedRooms = await scraper_1.default.scrapeRukitaLink(url, page);
                    break;
                default:
                    throw new Error('Unsupported site');
            }
            await browser.close();
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
                        room = Object.assign(Object.assign({}, scrapedRoom), { priceHistory: updatedPriceHistory, lowestPrice: (0, functions_1.getLowestPrice)(updatedPriceHistory), highestPrice: (0, functions_1.getHighestPrice)(updatedPriceHistory), averagePrice: (0, functions_1.getAveragePrice)(updatedPriceHistory) });
                    }
                    else {
                        const priceHistory = [
                            { price: scrapedRoom.currentPrice, date: new Date() },
                        ];
                        room = Object.assign(Object.assign({}, scrapedRoom), { priceHistory, lowestPrice: (0, functions_1.getLowestPrice)(priceHistory), highestPrice: (0, functions_1.getHighestPrice)(priceHistory), averagePrice: (0, functions_1.getAveragePrice)(priceHistory) });
                    }
                    await this.roomModel.findOneAndUpdate({ url: scrapedRoom.url, title: scrapedRoom.title }, room, { upsert: true, new: true });
                }
            }
            return { success: true };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Room')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map