"use server"

import puppeteer from "puppeteer";

export async function scrapeRukitaLink(url: string) {
  if(!url) return;

  try {

  } catch(error: any) {
    console.log(`Failed to scrape website: ${error.message}`);
  }
}