"use server"

export async function scrapeRukitaLink(url: string, page: any) {
  try {
    console.log("rukita");
  } catch(error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}