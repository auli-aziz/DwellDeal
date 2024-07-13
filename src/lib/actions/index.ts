"use server";
import { scrapeMamikosLink } from "../scraper/mamikos";

export async function scrapeAndStore(url: string) {
  if(!url) return;

  try {
    const data = await scrapeMamikosLink(url);
  } catch(error: any) {
    throw new Error(`Failed to store product: ${error.message}`);
  }
}