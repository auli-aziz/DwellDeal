"use server"

export async function scrapeRukitaLink(url: string, page: any) {
  try {
    const data = await page.evaluate(() => {
      const results = [];
      
      const images = [] as string[];
      const mainImage = document.querySelector("div.group.aspect-h-5.aspect-w-6.col-span-2.row-span-2.overflow-hidden.rounded-l-lg img") as HTMLImageElement;
      const smallImages = Array.from(document.querySelectorAll("div.group.aspect-h-\\[29\\].aspect-w-\\[35\\].col-span-1.overflow-hidden.sm\\:relative.sm\\:h-full img")) as HTMLImageElement[];
      
      images.push(mainImage.src);
      images.push(...smallImages.map(img => img.src));

      const typeElements = Array.from(document.querySelectorAll("div.box2.p-4.md\\:px-0 h3.mb-1.text-md.font-medium"));
      const rooms = typeElements?.map(room => room.textContent?.trim()) ?? '';

      const roomImages = Array.from(document.querySelectorAll(""));
      roomImages.forEach(roomImage => );

      rooms.map(room => results.push({room, images}));
      
      // const titleElement = document.querySelector("");
      // const locationElement = document.querySelector("");
      // const genderElement = document.querySelector("");
      // const priceElement = document.querySelector("");
      
      // const title = titleElement?.textContent?.trim() ?? '';
      // const location = locationElement?.textContent?.trim() ?? '';
      // const gender = genderElement?.textContent?.trim() ?? 'campur';
      // const price = priceElement?.textContent?.trim() ?? '';
      // const originalPrice = priceElement?.textContent?.trim() ?? '';



      return results;
    })

    console.log(data);
  } catch(error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}