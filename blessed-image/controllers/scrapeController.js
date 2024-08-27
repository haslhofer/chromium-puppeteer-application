import * as express from "express";
import puppeteer from 'puppeteer';

const router = express.Router()

export const scrapeController = router.get("/", async (_req, res) => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    await page.goto('https://developer.chrome.com/');

    const title = await page.title();
    
    // Print the full title
    console.log('The title of this blog post is "%s".', title);
    await browser.close();
    res.json({ msg: title })
})

