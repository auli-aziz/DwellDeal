"use server"

export async function scrapeRukitaLink(url: string, page: any) {
  try {
    const items = await page.evaluate(() => {
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
        const titleElement = element.querySelector('.box2 h3');
        const priceElement = element.querySelector('p.price.text-md.font-medium.lg\\:text-right.lg\\:text-base.lg\\:text-xl');
        const originalPriceElement = element.querySelector('p.price.text-sm.line-through.lg\\:text-right.lg\\:text-md');

        const title = titleElement?.textContent?.trim() ?? '';
        const price = priceElement?.textContent?.trim() ?? '';
        const originalPrice = originalPriceElement?.textContent?.trim() ?? '';

        data.push({
          image,
          title,
          price,
          originalPrice,
          location,
          gender,
        });
      });

      return data;
    });

    console.log(items);
  } catch (error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}
