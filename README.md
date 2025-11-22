# Vincent — Brand Site (Starter)

This repo contains a Vite + React starter with Tailwind CSS configured. I scaffolded the base project and initial components and began populating images and copy to move toward a pixel-accurate LG layout.

Quick start
- Install dependencies: `npm install`
- Run dev server: `npm run dev`

Screenshots / visual regression
- To capture LG/MD/SM screenshots create a running dev server (`npm run dev`) then run:

```bash
npm i -D playwright
npm run screenshots
```

This will save `screenshots/screenshot_lg.png`, `screenshots/screenshot_md.png`, and `screenshots/screenshot_sm.png` for visual checks.

Lighthouse
- For Lighthouse audits run locally (requires Chrome):

```bash
npx lighthouse http://localhost:5174 --output html --output-path ./screenshots/lighthouse.html
```

Note: Running Lighthouse or Playwright inside this container may require additional packages (Chrome) — see the project README for guidance.

Image credits
- Hero image: "Team working" by Brooke Cagle on Unsplash — https://unsplash.com/photos/1526378720176-4f5f1f2b9d5b
- Product Design image: Photo by Christina @ wocintechchat on Unsplash — https://unsplash.com/photos/1553877522
- Design Systems image: Photo by Christina on Unsplash — https://unsplash.com/photos/1528308145018
- Strategy image: Photo by Kelly Sikkema on Unsplash — https://unsplash.com/photos/1519389950473

These images are used under Unsplash's license and will be optimized during the build.

# Vincentmakau
hi,am vincent a proggramer at IYF weekend academy
