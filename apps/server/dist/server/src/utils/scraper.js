"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const scraper = {
    scrapeCoveLink: async (url, page) => {
        try {
            const extractPriceFunc = functions_1.extractPrice.toString();
            const data = await page.evaluate((extractPriceString, pageUrl) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                const extractPrice = new Function("return " + extractPriceString)();
                const staticImages = [];
                const image1 = document.querySelector(".w-full.shrink-0.cursor-pointer.tablet\\:w-1\\/2.desktop\\:w-\\[624px\\] img");
                const image2 = Array.from(document.querySelectorAll(".relative.h-20.w-full.cursor-pointer.overflow-hidden.tablet\\:h-\\[116px\\].tablet\\:rounded-lg.desktop\\:h-\\[200px\\] img"));
                if (image1)
                    staticImages.push(image1.src);
                if (image2.length > 0)
                    staticImages.push(...image2.map((image) => image.src));
                const titleElement = document.querySelector("h2.mt-2.text-3xl.font-black.lowercase.text-neutral-600.tablet\\:text-4xl");
                const locationElement = document.querySelector("div.mt-6.flex.items-center.gap-3 span.font-medium.text-neutral-600");
                const priceElement = document.querySelector("div.font-black.leading-none.text-4xl");
                const originalPriceElement = document.querySelector("div.my-4 div.px-4 section.flex.flex-col.gap-1.text-sm.font-bold div.flex.items-center.gap-2 div.flex.items-baseline.gap-1.text-xs.font-bold.text-neutral-400 div.text-base.line-through");
                const title = (_b = (_a = titleElement === null || titleElement === void 0 ? void 0 : titleElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
                const location = (_d = (_c = locationElement === null || locationElement === void 0 ? void 0 : locationElement.textContent) === null || _c === void 0 ? void 0 : _c.trim()) !== null && _d !== void 0 ? _d : "";
                const price = (_f = (_e = priceElement === null || priceElement === void 0 ? void 0 : priceElement.textContent) === null || _e === void 0 ? void 0 : _e.trim()) !== null && _f !== void 0 ? _f : "";
                const originalPrice = (_h = (_g = originalPriceElement === null || originalPriceElement === void 0 ? void 0 : originalPriceElement.textContent) === null || _g === void 0 ? void 0 : _g.trim()) !== null && _h !== void 0 ? _h : "";
                const availabilityElement = document.querySelector(".flex.h-6.items-center.overflow-hidden.text-sm.font-semibold.text-white.w-fit.rounded-br-lg.bg-cove-teal");
                const availabilityText = (_k = (_j = availabilityElement === null || availabilityElement === void 0 ? void 0 : availabilityElement.textContent) === null || _j === void 0 ? void 0 : _j.trim().toLowerCase()) !== null && _k !== void 0 ? _k : "";
                const isAvailable = availabilityText.includes("kamar") || availabilityText.includes("room");
                return [
                    {
                        url: pageUrl,
                        images: staticImages,
                        title,
                        location,
                        rating: 5,
                        currentPrice: extractPrice(price),
                        originalPrice: extractPrice(originalPrice),
                        gender: "campur",
                        isAvailable,
                    },
                ];
            }, extractPriceFunc, url);
            console.log(data);
            return data;
        }
        catch (error) {
            console.log(`Failed to scrape website: ${error.message}`);
        }
    },
    scrapeMamikosLink: async (url, page) => {
        try {
            const extractPriceFunc = functions_1.extractPrice.toString();
            await page.waitForSelector(".content-container");
            await page.waitForSelector(".detail-kost-overview__availability-text, .detail-kost-overview__availability-wrapper");
            const data = await page.evaluate((extractPriceString, pageUrl) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
                const extractPrice = new Function("return " + extractPriceString)();
                const staticImages = [];
                const allImages = Array.from(document.querySelectorAll("#detailPhotoContainer img")).map((img) => img.getAttribute("src") || img.getAttribute("data-src"));
                staticImages.push(...allImages.filter((src) => !!src && !src.includes("data:image/gif") && !src.includes("/general/img/pictures/placeholder")));
                const titleElement = document.querySelector("p.detail-title__room-name");
                const locationElement = document.querySelector("p.detail-kost-overview__area-text");
                const ratingElement = document.querySelector("p.detail-kost-overview__rating-text");
                const priceElement = document.querySelector("div.card-price__price p");
                const originalPriceElement = document.querySelector("span.rc-price__additional-discount-price");
                const genderElement = document.querySelector("span.detail-kost-overview__gender-box");
                const title = (_b = (_a = titleElement === null || titleElement === void 0 ? void 0 : titleElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
                const location = (_d = (_c = locationElement === null || locationElement === void 0 ? void 0 : locationElement.textContent) === null || _c === void 0 ? void 0 : _c.trim()) !== null && _d !== void 0 ? _d : "";
                const rating = (_f = (_e = ratingElement === null || ratingElement === void 0 ? void 0 : ratingElement.textContent) === null || _e === void 0 ? void 0 : _e.trim()) !== null && _f !== void 0 ? _f : "";
                const price = (_h = (_g = priceElement === null || priceElement === void 0 ? void 0 : priceElement.textContent) === null || _g === void 0 ? void 0 : _g.trim()) !== null && _h !== void 0 ? _h : "";
                const originalPrice = (_k = (_j = originalPriceElement === null || originalPriceElement === void 0 ? void 0 : originalPriceElement.textContent) === null || _j === void 0 ? void 0 : _j.trim()) !== null && _k !== void 0 ? _k : "";
                const gender = (_m = (_l = genderElement === null || genderElement === void 0 ? void 0 : genderElement.textContent) === null || _l === void 0 ? void 0 : _l.trim()) !== null && _m !== void 0 ? _m : "";
                const availabilityElement = document.querySelector(".detail-kost-overview__availability-text") ||
                    document.querySelector(".detail-kost-overview__availability-wrapper");
                const availabilityText = (_p = (_o = availabilityElement === null || availabilityElement === void 0 ? void 0 : availabilityElement.textContent) === null || _o === void 0 ? void 0 : _o.trim().toLowerCase()) !== null && _p !== void 0 ? _p : "";
                const isAvailable = availabilityText.includes("tersisa") ||
                    availabilityText.includes("banyak");
                return [
                    {
                        url: pageUrl,
                        images: staticImages,
                        title,
                        location,
                        rating: Number(rating),
                        currentPrice: extractPrice(price),
                        originalPrice: extractPrice(originalPrice),
                        gender,
                        isAvailable,
                    },
                ];
            }, extractPriceFunc, url);
            console.log(data);
            return data;
        }
        catch (error) {
            console.log(`Failed to scrape website: ${error.message}`);
        }
    },
    scrapeRukitaLink: async (url, page) => {
        try {
            const extractPriceFunc = functions_1.extractPrice.toString();
            const data = await page.evaluate((extractPriceString, pageUrl) => {
                var _a, _b, _c, _d;
                const extractPrice = new Function("return " + extractPriceString)();
                const data = [];
                const elements = document.querySelectorAll('[data-testid="AssetVariantItem"]');
                const images = [];
                const houseImages = Array.from(document.querySelectorAll('div.group.aspect-h-\\[29\\].aspect-w-\\[35\\].col-span-1.overflow-hidden.sm\\:relative.sm\\:h-full img'));
                images.push(...houseImages.map(img => img.src));
                const locationElement = document.querySelector('.mt-2.text-sm.text-neutral-80.md\\:text-lg');
                const location = (_b = (_a = locationElement === null || locationElement === void 0 ? void 0 : locationElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
                const genderElement = document.querySelector('.ml-1.flex-1.truncate.text-sm.md\\:text-md span:nth-child(2) span:last-child');
                const gender = (_d = (_c = genderElement === null || genderElement === void 0 ? void 0 : genderElement.textContent) === null || _c === void 0 ? void 0 : _c.trim()) !== null && _d !== void 0 ? _d : 'campur';
                elements.forEach((element) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    const image = (_a = element.querySelector('[data-testid="Image"]')) === null || _a === void 0 ? void 0 : _a.getAttribute('src');
                    const roomImages = [image, ...images];
                    const titleElement = element.querySelector('.box2 h3');
                    const priceElement = element.querySelector('p.price.text-md.font-medium.lg\\:text-right.lg\\:text-base.lg\\:text-xl');
                    const originalPriceElement = element.querySelector('p.price.text-sm.line-through.lg\\:text-right.lg\\:text-md');
                    const title = (_c = (_b = titleElement === null || titleElement === void 0 ? void 0 : titleElement.textContent) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : '';
                    const price = (_e = (_d = priceElement === null || priceElement === void 0 ? void 0 : priceElement.textContent) === null || _d === void 0 ? void 0 : _d.trim()) !== null && _e !== void 0 ? _e : '';
                    const originalPrice = (_g = (_f = originalPriceElement === null || originalPriceElement === void 0 ? void 0 : originalPriceElement.textContent) === null || _f === void 0 ? void 0 : _f.trim()) !== null && _g !== void 0 ? _g : '';
                    const availabilityElement = element.querySelector("p.ml-2.text-sm.text-neutral-100");
                    const availabilityText = (_j = (_h = availabilityElement === null || availabilityElement === void 0 ? void 0 : availabilityElement.textContent) === null || _h === void 0 ? void 0 : _h.trim().toLowerCase()) !== null && _j !== void 0 ? _j : "";
                    const isNotAvailable = availabilityText.includes("dari") || availabilityText.includes("tidak");
                    data.push({
                        url: pageUrl,
                        images: roomImages,
                        title,
                        location,
                        rating: 5,
                        currentPrice: extractPrice(price),
                        originalPrice: extractPrice(originalPrice),
                        gender,
                        isAvailable: !isNotAvailable
                    });
                });
                return data;
            }, extractPriceFunc, url);
            console.log(data);
            return data;
        }
        catch (error) {
            console.log(`Failed to scrape website: ${error.message}`);
        }
    },
};
exports.default = scraper;
//# sourceMappingURL=scraper.js.map