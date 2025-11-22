const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

;(async () => {
  const url = process.argv[2] || 'http://localhost:5174/'
  const out = path.join(__dirname, '..', 'screenshots')
  if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true })

  const browser = await chromium.launch()
  const page = await browser.newPage()

  const viewports = [
    { name: 'lg', width: 1280, height: 800 },
    { name: 'md', width: 900, height: 800 },
    { name: 'sm', width: 375, height: 800 }
  ]

  for (const v of viewports) {
    await page.setViewportSize({ width: v.width, height: v.height })
    await page.goto(url, { waitUntil: 'networkidle' })
    const file = path.join(out, `screenshot_${v.name}.png`)
    await page.screenshot({ path: file, fullPage: true })
    console.log('Saved', file)
  }

  await browser.close()
})().catch(err => {
  console.error(err)
  process.exit(1)
})
