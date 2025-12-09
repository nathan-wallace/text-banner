# Social Media Toolkit Starter

Create, preview, and export on-brand campaign assets for every social channel from a single Storybook workspace. This template extends the default Storybook sample stories with reusable brand tokens, drag-and-drop asset helpers, and ready-to-customize platform canvases so your team can ship cohesive campaigns faster.

## Table of contents
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [Customize your brand system](#customize-your-brand-system)
  - [Update logos and imagery](#update-logos-and-imagery)
  - [Set brand colors and tokens](#set-brand-colors-and-tokens)
  - [Configure typography](#configure-typography)
- [Create campaign-ready templates](#create-campaign-ready-templates)
  - [Clone a platform story](#clone-a-platform-story)
  - [Add custom controls](#add-custom-controls)
  - [Persist reusable elements](#persist-reusable-elements)
- [Export production assets](#export-production-assets)
- [Collaboration tips](#collaboration-tips)
- [Troubleshooting](#troubleshooting)

## Prerequisites
- [Node.js](https://nodejs.org/) 18 or later.
- npm 9+ (bundled with Node 18).

## Quick start
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Launch Storybook**
   ```bash
   npm run storybook
   ```
   Storybook starts on [http://localhost:6006](http://localhost:6006). Use the left-hand navigation to explore platform templates, brand elements, and usage guidance.
3. **Build static docs (optional)**
   ```bash
   npm run build-storybook
   ```
   The static build outputs to `./docs`, which is ready to serve via GitHub Pages or any static host.

## Project structure
```
├── src
│   ├── brand.js            # Brand-wide logo, fonts, and color aliases
│   ├── components/         # Reusable drag-and-drop + upload helpers
│   ├── stories/            # Storybook stories for platforms, brand elements, guides
│   ├── tokens/             # Design tokens (colors, etc.)
│   └── utils/              # Shared utilities (image export, storage helpers)
├── .storybook/             # Storybook configuration
├── docs/                   # Pre-built Storybook for static hosting
└── package.json            # Scripts and dependencies
```

## Customize your brand system
Tailor the starter to your brand before building campaign templates.

### Update logos and imagery
- Replace the default logo URL in [`src/brand.js`](src/brand.js) with your hosted logo or add an asset pipeline that references local files.
- Use the **Brand Elements** stories (e.g., locks for profile pictures, watermarks, or stickers) to upload reusable imagery. Uploads persist in local storage so you can reuse the same files across stories while iterating.

### Set brand colors and tokens
- Extend or replace the color scales in [`src/tokens/colors.js`](src/tokens/colors.js). Each color key can expose multiple stops (`50`, `100`, `500`, etc.) for light/dark modes.
- Map token values into the `brand.colors` section of [`src/brand.js`](src/brand.js) so components automatically pick up your palette.
- Reference tokens within stories and components to keep every platform layout in sync with brand updates.

### Configure typography
- Update the `fonts` object in [`src/brand.js`](src/brand.js) with your brand typefaces. Include web-safe fallbacks for reliability.
- If you host custom fonts, load them globally via `.storybook/preview-head.html` or add a CSS import to `.storybook/preview.js`.

## Create campaign-ready templates
The `src/stories/platforms` directory contains platform-specific canvases (Instagram, TikTok, newsletters, etc.). Use them as a blueprint for your own placements.

### Clone a platform story
1. Duplicate an existing file from `src/stories/platforms/` and rename it (for example, copy `Instagram.stories.jsx` to `EventBooth.stories.jsx`).
2. Update the `meta` title so your story appears correctly in the Storybook sidebar.
3. Adjust the artboard size, safe area overlays, and default imagery to match the destination platform or campaign placement.

### Add custom controls
- Controls defined in [`src/stories/platforms/storyControls.js`](src/stories/platforms/storyControls.js) power the right-hand sidebar inputs.
- Reuse shared controls (image uploads, color pickers, toggles) or extend the config with new knobs to manage copy, CTA buttons, overlays, or animation frames.
- Make controls descriptive; clear labels and default values help collaborators explore templates without guidance.

### Persist reusable elements
- The helper components in `src/components/` (like `LogoUploader`) store uploads in `localStorage`. Reuse them across stories to keep logos, watermarks, or stickers consistent.
- Use unique `storageKey` props when you need separate assets for different campaigns or brands.
- For text presets, create small utilities in `src/utils/` to serialize control state into Storybook URLs so teams can share fully configured layouts.

## Export production assets
- Every platform story includes download controls powered by `html2canvas`. Set the **Format** control to PNG, JPG, or WEBP before exporting.
- Need multiple aspect ratios? Create companion stories with different canvas sizes and shared controls so you can update copy once and export everything together.
- The generated files respect the safe area boundaries you configure, minimizing rework after stakeholder review.

## Collaboration tips
- Treat stories as living documentation—link platform specs, brand guidelines, and campaign notes inside MDX stories like [`UsageGuide.mdx`](src/stories/UsageGuide.mdx).
- Commit token changes and brand updates alongside story tweaks to keep every layout in sync.
- Use GitHub Pages (or your preferred static host) to publish the `/docs` build so stakeholders can review templates without installing dependencies.

## Troubleshooting
| Issue | Fix |
| --- | --- |
| Storybook does not start | Confirm Node 18+ is installed and no other process is using port 6006. Run `npx kill-port 6006` if needed. |
| Fonts do not load | Ensure custom fonts are hosted with correct CORS headers and linked in `.storybook/preview-head.html`. |
| Uploaded images reset | Uploads persist in `localStorage`. If they disappear, check browser privacy settings or use a unique `storageKey`. |
| Exported assets look blurry | Increase the `exportScale` (where available) or start from higher-resolution source imagery. |

Have improvements? Open an issue or submit a PR to share new platform stories, controls, or workflow tips. Happy templating!
