"use server";

export async function scrapeCoveLink(url: string, page: any) {
  try {
    const data = await page.evaluate(() => {
      const staticImages: string[] = [];

      const image1 = document.querySelector(".w-full.shrink-0.cursor-pointer.tablet\\:w-1\\/2.desktop\\:w-\\[624px\\] img") as HTMLImageElement;
      const image2 = Array.from(document.querySelectorAll(".relative.h-20.w-full.cursor-pointer.overflow-hidden.tablet\\:h-\\[116px\\].tablet\\:rounded-lg.desktop\\:h-\\[200px\\] img")) as HTMLImageElement[];

      if (image1) staticImages.push(image1.src);
      if (image2.length > 0) staticImages.push(...image2.map(image => image.src));

      const titleElement = document.querySelector('h2.mt-2.text-3xl.font-black.lowercase.text-neutral-600.tablet\\:text-4xl');
      const locationElement = document.querySelector("span.font-medium.text-neutral-600");
      const typeElement = document.querySelector('h1.text-2xl.font-bold.text-neutral-600 a');
      const priceElement = document.querySelector("div.font-black.leading-none.text-4xl");
      const originalPriceElement = document.querySelector("div.text-base.line-through");

      const title = titleElement?.textContent?.trim() ?? '';
      const location = locationElement?.textContent?.trim() ?? '';
      const type = typeElement?.textContent?.trim() ?? '';
      const price = priceElement?.textContent?.trim() ?? '';
      const originalPrice = originalPriceElement?.textContent?.trim() ?? null;

      const availabilityElement = document.querySelector(".flex.h-6.items-center.overflow-hidden.text-sm.font-semibold.text-white.w-fit.rounded-br-lg.bg-cove-teal");
      const availabilityText = availabilityElement?.textContent?.trim().toLowerCase() ?? '';
      const isAvailable = availabilityText.includes("kamar") || availabilityText.includes("room");

      return {
        images: staticImages,
        title,
        type,
        location,
        rating: null,
        price,
        originalPrice,
        gender: "campur", 
        isAvailable, 
      };
    });

    console.log(data);
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}
