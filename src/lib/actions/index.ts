"use server";
import { scrapeMamikosLink } from "../scraper/mamikos";
import { scrapeCoveLink } from "../scraper/cove";
import { scrapeRukitaLink } from "../scraper/rukita";
import { site } from "@/lib/utils/website";

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
    switch(hostname) {
      case site.mamikos:
        data = await scrapeMamikosLink(url);
      case site.cove:
        data = await scrapeCoveLink(url);
      case site.rukita:
        data = await scrapeCoveLink(url);
      default:
        return;
    }
    
  } catch (error: any) {
    console.log(`Failed to store product: ${error.message}`);
  }
}
