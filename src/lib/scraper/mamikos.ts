"use server";

import { Page } from "puppeteer";
import { extractPrice } from "../utils/functions";

export async function scrapeMamikosLink(url: string, page: Page) {
  try {
    const extractPriceFunc = extractPrice.toString();
    
    await page.waitForSelector(".content-container");
    await page.waitForSelector(
      ".detail-kost-overview__availability-text, .detail-kost-overview__availability-wrapper"
    );

    const data = await page.evaluate((extractPriceString) => {
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
          site: "mamikos",
          images: staticImages,
          title,
          location,
          rating,
          price: extractPrice(price),
          originalPrice: extractPrice(originalPrice),
          gender,
          isAvailable,
        },
      ];
    }, extractPriceFunc);

    console.log(data);
    return data;
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}
