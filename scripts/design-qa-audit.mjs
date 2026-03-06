/**
 * Design QA audit: contrast, padding, typography, logo row.
 * Run: node scripts/design-qa-audit.mjs [before|after]
 * Requires: npm run dev (localhost:3000)
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = "http://localhost:3000";
const OUT_DIR = path.join(process.cwd(), "design-qa");
const SUFFIX = process.argv[2] || "before";

function parseRgb(str) {
  if (!str || str === "rgba(0, 0, 0, 0)" || str === "transparent") return null;
  const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (m) return { r: +m[1], g: +m[2], b: +m[3] };
  return null;
}

function sumRgb(rgb) {
  return rgb ? rgb.r + rgb.g + rgb.b : 0;
}

function isDark(rgb) {
  return sumRgb(rgb) < 400;
}

function runAudit() {
  const fails = [];

  const buttons = document.querySelectorAll("a, button, [role='button']");
  buttons.forEach((el, i) => {
    const cs = window.getComputedStyle(el);
    const color = parseRgb(cs.color);
    const bg = parseRgb(cs.backgroundColor);
    const paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const tag = el.tagName.toLowerCase();
    const role = el.getAttribute("role") || "";
    const text = (el.textContent || "").trim().slice(0, 30);

    if (bg && color) {
      const bgDark = isDark(bg);
      const textDark = isDark(color);
      if (bgDark && textDark) {
        fails.push({
          rule: "contrast",
          msg: `Dark text on dark background: ${tag} "${text}"`,
        });
      }
    }

    if ((tag === "button" || role === "button") && paddingY < 12 && paddingY > 0) {
      fails.push({
        rule: "padding",
        msg: `Button padding Y < 12px (${paddingY.toFixed(0)}px): "${text}"`,
      });
    }
  });

  const headings = document.querySelectorAll("h1, h2, .lead");
  headings.forEach((el) => {
    const cs = window.getComputedStyle(el);
    const maxW = cs.maxWidth;
    const rect = el.getBoundingClientRect();
    const chApprox = parseFloat(cs.fontSize) * 0.5;
    const maxCh = rect.width / (chApprox || 16);
    if (maxW === "none" && maxCh > 75) {
      fails.push({
        rule: "max-width",
        msg: `${el.tagName}/${el.className} exceeds ~70ch (no max-width, ~${Math.round(maxCh)}ch)`,
      });
    }
  });

  const logoRow = document.querySelector(".logo-row");
  if (logoRow) {
    const items = logoRow.querySelectorAll(".logo-row-item, [class*='logo']");
    items.forEach((el) => {
      const cs = window.getComputedStyle(el);
      const br = cs.borderRadius;
      const padding = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom) + parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      const border = cs.borderWidth;
      if (padding > 16 && (br === "9999px" || br === "999px" || parseFloat(br) > 20)) {
        fails.push({
          rule: "logo-pill",
          msg: "Logo row item looks pill-ish (large border-radius and/or padding)",
        });
      }
    });
  }

  return fails;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 15000 }).catch(() => null);

    const viewports = [
      { name: "desktop", width: 1440, height: 900 },
      { name: "mobile", width: 390, height: 844 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.screenshot({
        path: path.join(OUT_DIR, `${SUFFIX}-${vp.name}.png`),
        fullPage: true,
      });
    }

    await page.setViewportSize({ width: 1440, height: 900 });
    const fails = await page.evaluate(runAudit);

    const uniqueFails = [];
    const seen = new Set();
    for (const f of fails) {
      const key = f.rule + ":" + f.msg;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueFails.push(f);
      }
    }

    return uniqueFails;
  } catch (e) {
    console.error("Audit error (is npm run dev running?):", e.message);
    return [{ rule: "connection", msg: "Could not load localhost:3000. Run npm run dev first." }];
  } finally {
    if (browser) await browser.close();
  }
}

main().then((fails) => {
  const reportPath = path.join(process.cwd(), "DESIGN_QA.md");
  const lines = [
    "# Design QA Report",
    "",
    `**Run:** ${SUFFIX} | **Date:** ${new Date().toISOString().slice(0, 10)}`,
    "",
    "## FAILs (max 15)",
    "",
    ...fails.slice(0, 15).map((f) => `- [ ] **${f.rule}** ${f.msg}`),
    "",
    "## Screenshots",
    `- \`design-qa/${SUFFIX}-desktop.png\``,
    `- \`design-qa/${SUFFIX}-mobile.png\``,
  ];
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8");
  console.log("FAILs:", fails.length);
  console.log("Report:", reportPath);
});
