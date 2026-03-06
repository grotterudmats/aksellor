/**
 * Composition pass screenshots: desktop 1440, mobile 390.
 * Run: node scripts/screenshots-debug.mjs [before|after]
 * Requires: npm run dev (localhost:3000)
 * Saves: public/debug/<before|after>-desktop.png, <before|after>-mobile.png
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = "http://localhost:3000";
const OUT_DIR = path.join(process.cwd(), "public", "debug");
const SUFFIX = process.argv[2] || "before";

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 15000 });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.screenshot({
      path: path.join(OUT_DIR, `${SUFFIX}-desktop.png`),
      fullPage: true,
    });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({
      path: path.join(OUT_DIR, `${SUFFIX}-mobile.png`),
      fullPage: true,
    });

    console.log("Screenshots saved to public/debug/:", `${SUFFIX}-desktop.png`, `${SUFFIX}-mobile.png`);
  } catch (e) {
    console.error("Error (is npm run dev running?):", e.message);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
}

main();
