"use server";

import { Page } from "puppeteer";
import { extractPrice } from "./functions";

export async function scrapeCoveLink(url: string, page: Page) {
  try {
    const extractPriceFunc = extractPrice.toString();

    const data = await page.evaluate((extractPriceString, pageUrl) => {
      const extractPrice = new Function("return " + extractPriceString)();

      const staticImages: string[] = [];

      const image1 = document.querySelector(
        ".w-full.shrink-0.cursor-pointer.tablet\\:w-1\\/2.desktop\\:w-\\[624px\\] img"
      ) as HTMLImageElement;
      const image2 = Array.from(
        document.querySelectorAll(
          ".relative.h-20.w-full.cursor-pointer.overflow-hidden.tablet\\:h-\\[116px\\].tablet\\:rounded-lg.desktop\\:h-\\[200px\\] img"
        )
      ) as HTMLImageElement[];

      if (image1) staticImages.push(image1.src);
      if (image2.length > 0)
        staticImages.push(...image2.map((image) => image.src));

      const titleElement = document.querySelector(
        "h2.mt-2.text-3xl.font-black.lowercase.text-neutral-600.tablet\\:text-4xl"
      );
      const locationElement = document.querySelector(
        "div.mt-6.flex.items-center.gap-3 span.font-medium.text-neutral-600"
      );
      const priceElement = document.querySelector(
        "div.font-black.leading-none.text-4xl"
      );
      const originalPriceElement = document.querySelector(
        "div.my-4 div.px-4 section.flex.flex-col.gap-1.text-sm.font-bold div.flex.items-center.gap-2 div.flex.items-baseline.gap-1.text-xs.font-bold.text-neutral-400 div.text-base.line-through"
      );

      const title = titleElement?.textContent?.trim() ?? "";
      const location = locationElement?.textContent?.trim() ?? "";
      const price = priceElement?.textContent?.trim() ?? "";
      const originalPrice = originalPriceElement?.textContent?.trim() ?? "";

      const availabilityElement = document.querySelector(
        ".flex.h-6.items-center.overflow-hidden.text-sm.font-semibold.text-white.w-fit.rounded-br-lg.bg-cove-teal"
      );
      const availabilityText =
        availabilityElement?.textContent?.trim().toLowerCase() ?? "";
      const isAvailable =
        availabilityText.includes("kamar") || availabilityText.includes("room");

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
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}

export async function scrapeMamikosLink(url: string, page: Page) {
  try {
    const extractPriceFunc = extractPrice.toString();
    
    await page.waitForSelector(".content-container");
    await page.waitForSelector(
      ".detail-kost-overview__availability-text, .detail-kost-overview__availability-wrapper"
    );

    const data = await page.evaluate((extractPriceString, pageUrl) => {
      const extractPrice = new Function("return " + extractPriceString)();

      const staticImages: string[] = [];

      const allImages = Array.from(
        document.querySelectorAll("#detailPhotoContainer img")
      ).map((img) => img.getAttribute("src") || img.getAttribute("data-src"));
      
      staticImages.push(
        ...allImages.filter(
          (src): src is string =>
            !!src && !src.includes("data:image/gif") && !src.includes("/general/img/pictures/placeholder")
        )
      );

      const titleElement = document.querySelector("p.detail-title__room-name");
      const locationElement = document.querySelector(
        "p.detail-kost-overview__area-text"
      );
      const ratingElement = document.querySelector(
        "p.detail-kost-overview__rating-text"
      );
      const priceElement = document.querySelector("div.card-price__price p");
      const originalPriceElement = document.querySelector(
        "span.rc-price__additional-discount-price"
      );
      const genderElement = document.querySelector(
        "span.detail-kost-overview__gender-box"
      );

      const title = titleElement?.textContent?.trim() ?? "";
      const location = locationElement?.textContent?.trim() ?? "";
      const rating = ratingElement?.textContent?.trim() ?? "";
      const price = priceElement?.textContent?.trim() ?? "";
      const originalPrice = originalPriceElement?.textContent?.trim() ?? "";
      const gender = genderElement?.textContent?.trim() ?? "";

      const availabilityElement =
        document.querySelector(".detail-kost-overview__availability-text") ||
        document.querySelector(".detail-kost-overview__availability-wrapper");
      const availabilityText =
        availabilityElement?.textContent?.trim().toLowerCase() ?? "";
      const isAvailable =
        availabilityText.includes("tersisa") ||
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
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}

export async function scrapeRukitaLink(url: string, page: Page) {
  try {
    const extractPriceFunc = extractPrice.toString();

    const data = await page.evaluate((extractPriceString, pageUrl) => {
      const extractPrice = new Function("return " + extractPriceString)();

      const data: any[] = [];
      const elements = document.querySelectorAll('[data-testid="AssetVariantItem"]');

      const images: string[] = [];

      const houseImages = Array.from(document.querySelectorAll('div.group.aspect-h-\\[29\\].aspect-w-\\[35\\].col-span-1.overflow-hidden.sm\\:relative.sm\\:h-full img')) as HTMLImageElement[];
      images.push(...houseImages.map(img => img.src));

      const locationElement = document.querySelector('.mt-2.text-sm.text-neutral-80.md\\:text-lg');
      const location = locationElement?.textContent?.trim() ?? '';

      const genderElement = document.querySelector('.ml-1.flex-1.truncate.text-sm.md\\:text-md span:nth-child(2) span:last-child');
      const gender = genderElement?.textContent?.trim() ?? 'campur';

      elements.forEach((element) => {
        const image = element.querySelector('[data-testid="Image"]')?.getAttribute('src');
        const roomImages = [image, ...images];

        const titleElement = element.querySelector('.box2 h3');
        const priceElement = element.querySelector('p.price.text-md.font-medium.lg\\:text-right.lg\\:text-base.lg\\:text-xl');
        const originalPriceElement = element.querySelector('p.price.text-sm.line-through.lg\\:text-right.lg\\:text-md');

        const title = titleElement?.textContent?.trim() ?? '';
        const price = priceElement?.textContent?.trim() ?? '';
        const originalPrice = originalPriceElement?.textContent?.trim() ?? '';

        const availabilityElement = element.querySelector("p.ml-2.text-sm.text-neutral-100");
        const availabilityText = availabilityElement?.textContent?.trim().toLowerCase() ?? "";
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
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}