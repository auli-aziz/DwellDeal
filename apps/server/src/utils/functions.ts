import { site } from "./constants";
import { PriceHistoryItem } from "@web/types";

export const extractPrice = (price: string) => {
  if(price == null || price == "") return;
  price = price.replace(/,/g, "");
  const pattern = /\d/;
  const filteredPrice = price.split('').filter(char => pattern.test(char)).join('');

  return Number(filteredPrice);
}

export const checkHostname = (input: string) => {
  const url = new URL(input);
  const host = url.hostname;
  if (host.includes("mamikos.com") || host.includes("mamikos.")) {
    return site.mamikos;
  } else if (host.includes("cove.id") || host.includes("cove.")) {
    return site.cove;
  } else if (host.includes("rukita.co") || host.includes("rukita.")) {
    return site.rukita;
  }
  return null;
};

export const getHighestPrice = (priceList: PriceHistoryItem[]) => {
  let highestPrice = priceList[0];

  for (let i = 0; i < priceList.length; i++) {
    if (priceList[i].price > highestPrice.price) {
      highestPrice = priceList[i];
    }
  }

  return highestPrice.price;
}

export const getLowestPrice = (priceList: PriceHistoryItem[]) => {
  let lowestPrice = priceList[0];

  for (let i = 0; i < priceList.length; i++) {
    if (priceList[i].price < lowestPrice.price) {
      lowestPrice = priceList[i];
    }
  }

  return lowestPrice.price;
}

export const getAveragePrice = (priceList: PriceHistoryItem[]) => {
  const sumOfPrices = priceList.reduce((acc, curr) => acc + curr.price, 0);
  const averagePrice = sumOfPrices / priceList.length || 0;

  return averagePrice;
}

export const isValidLink = (input: string): boolean => {
  try {
    const url = new URL(input);
    const host = url.hostname;
    const path = url.pathname;

    const validPatterns = [
      "^mamikos\\.com/room",
      "^cove\\.id/en/listings",
      "^cove\\.id/listings",
      "rukita\\.co/place",
    ].map(pattern => new RegExp(pattern, 'i'));

    const invalidPattern = /apartemen/i; 

    const matchesValidPattern = validPatterns.some((regex) => {
      const fullPath = `${host}${path}`;
      return regex.test(fullPath);
    });

    const matchesInvalidPattern = invalidPattern.test(path);

    return matchesValidPattern && !matchesInvalidPattern;
  } catch (error) {
    return false;
  }
};
