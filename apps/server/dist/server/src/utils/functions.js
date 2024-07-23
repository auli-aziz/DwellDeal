"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidLink = exports.getAveragePrice = exports.getLowestPrice = exports.getHighestPrice = exports.checkHostname = exports.extractPrice = void 0;
const constants_1 = require("./constants");
const extractPrice = (price) => {
    if (price == null || price == "")
        return;
    price = price.replace(/,/g, "");
    const pattern = /\d/;
    const filteredPrice = price.split('').filter(char => pattern.test(char)).join('');
    return Number(filteredPrice);
};
exports.extractPrice = extractPrice;
const checkHostname = (input) => {
    const url = new URL(input);
    const host = url.hostname;
    if (host.includes("mamikos.com") || host.includes("mamikos.")) {
        return constants_1.site.mamikos;
    }
    else if (host.includes("cove.id") || host.includes("cove.")) {
        return constants_1.site.cove;
    }
    else if (host.includes("rukita.co") || host.includes("rukita.")) {
        return constants_1.site.rukita;
    }
    return null;
};
exports.checkHostname = checkHostname;
const getHighestPrice = (priceList) => {
    let highestPrice = priceList[0];
    for (let i = 0; i < priceList.length; i++) {
        if (priceList[i].price > highestPrice.price) {
            highestPrice = priceList[i];
        }
    }
    return highestPrice.price;
};
exports.getHighestPrice = getHighestPrice;
const getLowestPrice = (priceList) => {
    let lowestPrice = priceList[0];
    for (let i = 0; i < priceList.length; i++) {
        if (priceList[i].price < lowestPrice.price) {
            lowestPrice = priceList[i];
        }
    }
    return lowestPrice.price;
};
exports.getLowestPrice = getLowestPrice;
const getAveragePrice = (priceList) => {
    const sumOfPrices = priceList.reduce((acc, curr) => acc + curr.price, 0);
    const averagePrice = sumOfPrices / priceList.length || 0;
    return averagePrice;
};
exports.getAveragePrice = getAveragePrice;
const isValidLink = (input) => {
    try {
        const url = new URL(input);
        const host = url.hostname;
        const path = url.pathname;
        const validPatterns = [
            "^mamikos\\.com/room",
            "^cove\\.id/en/listings",
            "^cove\\.id/listings",
            "^rukita\\.co/place",
        ].map(pattern => new RegExp(pattern, 'i'));
        const invalidPattern = /apartemen/i;
        const matchesValidPattern = validPatterns.some((regex) => {
            const fullPath = `${host}${path}`;
            return regex.test(fullPath);
        });
        const matchesInvalidPattern = invalidPattern.test(path);
        return matchesValidPattern && !matchesInvalidPattern;
    }
    catch (error) {
        return false;
    }
};
exports.isValidLink = isValidLink;
//# sourceMappingURL=functions.js.map