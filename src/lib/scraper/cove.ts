"use server";

import { Page } from "puppeteer";
import { extractPrice } from "../utils/functions";

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
