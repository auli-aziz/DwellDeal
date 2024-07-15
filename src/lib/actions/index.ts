"use server";
import puppeteer from "puppeteer";
import { site } from "@/lib/utils/website";

import { scrapeMamikosLink } from "../scraper/mamikos";
import { scrapeCoveLink } from "../scraper/cove";
import { scrapeRukitaLink } from "../scraper/rukita";

const checkHostname = (input: string) => {
  const url = new URL(input);
  const host = url.hostname;
  if (host.includes("mamikos.com") || host.includes("mamikos.")) {
    return site.mamikos;
  } else if (host.includes("cove.id") || host.includes("cove.")) {
    return site.cove;
  } else if (host.includes("rukita.co") || host.includes("rukita.")) {
    return site.rukita;
  }

  return null;
};

export async function scrapeAndStore(url: string) {
  if (!url) return;

  const hostname = checkHostname(url);
  
  let data;
  try {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    switch(hostname) {
      case site.mamikos:
        data = await scrapeMamikosLink(url, page);
        break;
      case site.cove:
        data = await scrapeCoveLink(url, page);
        break;
      case site.rukita:
        data = await scrapeRukitaLink(url, page);
        break;
    }

    await browser.close();
  } catch (error: any) {
    console.log(`Failed to store product: ${error.message}`);
  }
}
