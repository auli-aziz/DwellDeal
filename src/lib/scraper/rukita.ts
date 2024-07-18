"use server"

import { Page } from "puppeteer";
import { extractPrice } from "../utils/functions";

export async function scrapeRukitaLink(url: string, page: Page) {
  try {
    const extractPriceFunc = extractPrice.toString();

    const data = await page.evaluate((extractPriceString) => {
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
          site: "ruktia",
          images: roomImages,
          title,
          location,
          rating: null,
          price: extractPrice(price),
          originalPrice: extractPrice(originalPrice),
          gender,
          isAvailable: !isNotAvailable
        });
      });

      return data;
    }, extractPriceFunc);

    console.log(data);
    return data;
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}
