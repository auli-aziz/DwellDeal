"use server";

export async function scrapeMamikosLink(url: string, page: any) {
  try {
    await page.waitForSelector(".content-container");
    await page.waitForSelector(".detail-kost-overview__availability-text, .detail-kost-overview__availability-wrapper");

    const data = await page.evaluate(() => {
      const staticImages: string[] = [];

      const allImages = Array.from(document.querySelectorAll("#detailPhotoContainer img"))
                             .map(img => img.getAttribute('src') || img.getAttribute('data-src'));
      staticImages.push(...allImages.filter(src => src && !src.includes('data:image/gif') && !src.includes('/general/img/pictures/placeholder')));

      const titleElement = document.querySelector("p.detail-title__room-name");
      const locationElement = document.querySelector("p.detail-kost-overview__area-text");
      const ratingElement = document.querySelector("p.detail-kost-overview__rating-text");
      const priceElement = document.querySelector("div.card-price__price p");
      const originalPriceElement = document.querySelector("span.rc-price__additional-discount-price");
      const genderElement = document.querySelector("span.detail-kost-overview__gender-box");

      const title = titleElement?.textContent?.trim() ?? null;
      const location = locationElement?.textContent?.trim() ?? null;
      const rating = ratingElement?.textContent?.trim() ?? null;
      const price = priceElement?.textContent?.trim() ?? null;
      const originalPrice = originalPriceElement?.textContent?.trim() ?? null;
      const gender = genderElement?.textContent?.trim() ?? null;

      const availabilityElement = document.querySelector(".detail-kost-overview__availability-text") ||
                                  document.querySelector(".detail-kost-overview__availability-wrapper");
      const availabilityText = availabilityElement?.textContent?.trim().toLowerCase() ?? '';
      const isAvailable = availabilityText.includes("tersisa") || availabilityText.includes("banyak");

      return {
        images: staticImages,
        title,
        location,
        rating,
        price,
        originalPrice,
        gender,
        isAvailable,
      };
    });

    console.log(data);
    return data;
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
    return { // Return an empty object or handle error cases as needed
      images: [],
      title: null,
      location: null,
      rating: null,
      price: null,
      originalPrice: null,
      gender: null,
      isAvailable: false,
    };
  }
}
