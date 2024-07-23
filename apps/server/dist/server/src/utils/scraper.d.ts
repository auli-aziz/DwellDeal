import { Page } from "puppeteer";
export declare function scrapeCoveLink(url: string, page: Page): Promise<{
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
export declare function scrapeMamikosLink(url: string, page: Page): Promise<{
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
export declare function scrapeRukitaLink(url: string, page: Page): Promise<any[] | undefined>;
