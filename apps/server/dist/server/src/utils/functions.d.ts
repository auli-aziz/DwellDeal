import { PriceHistoryItem } from "@/types";
export declare const extractPrice: (price: string) => number | undefined;
export declare const checkHostname: (input: string) => string | null;
export declare const getHighestPrice: (priceList: PriceHistoryItem[]) => number;
export declare const getLowestPrice: (priceList: PriceHistoryItem[]) => number;
export declare const getAveragePrice: (priceList: PriceHistoryItem[]) => number;
export declare const isValidLink: (input: string) => boolean;
