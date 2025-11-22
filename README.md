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

Deployment (Vercel)
- This project is ready to deploy to Vercel. Steps:

1. Push your repository to GitHub (make sure commits are visible and representative of your work).
2. Sign in to Vercel and import the GitHub repository.
3. Set the framework to "Other" or let Vercel detect Vite. Build command: `npm run build`. Output directory: `dist`.
4. Add any environment variables under Project Settings if needed.

I included a `vercel.json` with a basic static-build configuration. After deploying, copy the live URL into the README under "Live Demo".

Visual regression & CI notes
- Install `playwright` and run `npm run screenshots` to capture pages. Accept baselines with `npm run visual:accept` then use `npm run test` to compare.

Committing baselines & interpreting diffs
 - When you are happy with the LG layout and visual appearance, capture screenshots and accept them as baseline images. Baselines live under `screenshots/baseline/`.

 1. Start the dev server (or build+preview):

```bash
npm run dev
# in another terminal:
npm run screenshots
```

2. Review the screenshots in `screenshots/` (files: `screenshot_lg.png`, `screenshot_md.png`, `screenshot_sm.png`). If they're correct, accept them as the baseline:

```bash
npm run visual:accept
git add screenshots/baseline
git commit -m "chore(visual): add baseline screenshots"
git push origin main
```

3. CI will use these baseline images to compare future changes. If a commit introduces visual differences above the configured pixel threshold, the CI job will fail and upload artifacts.

Interpreting diffs
 - When the visual regression job fails it uploads three directories under the workflow artifacts: current screenshots, baseline screenshots, and diffs in `screenshots/diff/`.
 - Open the diff image `diff_<viewport>.png` to see pixel-level changes. The compare script also logs the number of mismatched pixels per viewport.
 - Typical workflow when diffs are detected:
	 - Inspect `screenshots/diff/diff_<viewport>.png` to verify the change is intended (content or styling update).
	 - If the change is intended (design update), regenerate and accept baselines locally and commit them:

```bash
npm run screenshots
npm run visual:accept
git add screenshots/baseline
git commit -m "chore(visual): update baseline screenshots"
git push origin main
```

 - If the diff is unexpected, open the current screenshot to identify the cause (regression in CSS, assets, or layout). Fix the code, then re-run the visual tests locally until the diffs disappear.

Best practices
 - Keep baseline updates separate and reviewed (small PRs) so baselines only change when UI updates are intentional.
 - Use the pixel counts and diffs to scope review — large, widespread diffs often indicate a layout regression.
 - Commit baselines only when you or a reviewer verifies visual correctness.



Image credits
- Hero image: "Team working" by Brooke Cagle on Unsplash — https://unsplash.com/photos/1526378720176-4f5f1f2b9d5b
- Product Design image: Photo by Christina @ wocintechchat on Unsplash — https://unsplash.com/photos/1553877522
- Design Systems image: Photo by Christina on Unsplash — https://unsplash.com/photos/1528308145018
- Strategy image: Photo by Kelly Sikkema on Unsplash — https://unsplash.com/photos/1519389950473

These images are used under Unsplash's license and will be optimized during the build.

# Vincentmakau
hi,am vincent a proggramer at IYF weekend academy
