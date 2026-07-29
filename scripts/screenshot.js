const { chromium } = require('playwright');

(async () => {
  const pages = [
    { url: 'https://stop-stroke-fast.base44.app/', out: 'public/screenshots/stroke-app.png' },
    { url: 'https://tinyurl.com/JFStrokeTraining', out: 'public/screenshots/stroke-video.png' },
    { url: 'https://tinyurl.com/JFPortal', out: 'public/screenshots/med-tracker.png' }
  ];

  const browser = await chromium.launch({ headless: true });
  try {
    for (const p of pages) {
      const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      console.log('Navigating to', p.url);
      try {
        await page.goto(p.url, { waitUntil: 'networkidle', timeout: 60000 });
      } catch (err) {
        console.warn('Navigation failed for', p.url, err.message);
      }
      await page.screenshot({ path: p.out, fullPage: true });
      console.log('Saved', p.out);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})();
