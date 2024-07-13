"use server";

import puppeteer from "puppeteer";

export async function scrapeMamikosLink(url: string) {
  if (!url) return;

  try {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    await page.waitForSelector(".content-container");
    await page.waitForSelector(".detail-kost-overview__availability-text, .detail-kost-overview__availability-wrapper");

    const contentList = await page.evaluate(() => {
      const allImages = Array.from(document.querySelectorAll("#detailPhotoContainer img")).map(img => img.getAttribute('src') || img.getAttribute('data-src'));
      const staticImages = allImages.filter(src => src && !src.includes('data:image/gif') && !src.includes('/general/img/pictures/placeholder'));

      const title = document.querySelector("p.detail-title__room-name");
      const location = document.querySelector("p.detail-kost-overview__area-text");
      const rating = document.querySelector("p.detail-kost-overview__rating-text");
      const price = document.querySelector("div.card-price__price p");
      const gender = document.querySelector("span.detail-kost-overview__gender-box");

      const availabilityElement = document.querySelector(".detail-kost-overview__availability-text") || 
                                  document.querySelector(".detail-kost-overview__availability-wrapper");

      const availabilityText = availabilityElement ? availabilityElement.textContent.trim().toLowerCase() : '';
      const isAvailable = availabilityText.includes("tersisa") || availabilityText.includes("banyak");
      return {
        images: staticImages,
        title: title ? title.textContent.trim() : null,
        location: location ? location.textContent.trim() : null,
        rating: rating ? rating.textContent.trim() : null,
        price: price ? price.textContent.trim() : null,
        gender: gender ? gender.textContent.trim() : null,
        isAvailable,
      };
    });

    console.log(contentList);
    await browser.close();
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}
