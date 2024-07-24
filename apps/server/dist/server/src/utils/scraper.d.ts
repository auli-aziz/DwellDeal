import { Page } from "puppeteer";
declare const scraper: {
    scrapeCoveLink: (url: string, page: Page) => Promise<{
        url: string;
        images: string[];
        title: string;
        location: string;
        rating: number;
        currentPrice: any;
        originalPrice: any;
        gender: string;
        isAvailable: boolean;
    }[] | undefined>;
    scrapeMamikosLink: (url: string, page: Page) => Promise<{
        url: string;
        images: string[];
        title: string;
        location: string;
        rating: number;
        currentPrice: any;
        originalPrice: any;
        gender: string;
        isAvailable: boolean;
    }[] | undefined>;
    scrapeRukitaLink: (url: string, page: Page) => Promise<any[] | undefined>;
};
export default scraper;
