import { NextRequest, NextResponse } from 'next/server';
import puppeteer from "puppeteer-extra";
import stealth from "puppeteer-extra-plugin-stealth";
import { scrapeMamikosLink } from "../../../lib/scraper/mamikos";
import { scrapeCoveLink } from "../../../lib/scraper/cove";
import { scrapeRukitaLink } from "../../../lib/scraper/rukita";
import { site } from "@/lib/utils/website";

// puppeteer.use(stealth());

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

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });
  }

  const hostname = checkHostname(url);
  if (!hostname) {
    return NextResponse.json({ error: "Unsupported hostname" }, { status: 400 });
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    let data;
    switch (hostname) {
      case site.mamikos:
        data = await scrapeMamikosLink(url, page);
        break;
      case site.cove:
        data = await scrapeCoveLink(url, page);
        break;
      case site.rukita:
        data = await scrapeRukitaLink(url, page);
        break;
      default:
        throw new Error("Unsupported site");
    }

    await browser.close();
    return NextResponse.json({ data });
  } catch (error: any) {
    console.error(`Failed to scrape: ${error.message}`);
    return NextResponse.json({ error: "Failed to scrape" }, { status: 500 });
  }
}
