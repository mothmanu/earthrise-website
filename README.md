# EarthRise — E-Lab Journey Website

The website of **EarthRise**, a student think tank at the African Leadership University tackling organic waste management in Kigali, Rwanda. Built as **E-Lab Challenge 6: Digital Print**.

🌍 **Live site:** https://mothmanu.github.io/earthrise-website/

## Pages

| Page | Content |
| --- | --- |
| `index.html` | Mission, key stats, pitch video |
| `problem.html` | Problem statement, 5 Whys root cause analysis, research findings |
| `solution.html` | Color-coded compostable bags, multi-bin systems, impact |
| `journey.html` | All six E-Lab challenges |
| `team.html` | The five members of EarthRise |

Plain HTML/CSS/JS — no build step. Open `index.html` in a browser, or serve the folder with any static host.

## Adding the challenge videos

The challenge videos are hosted on YouTube (the raw files are too large for GitHub). Each video slot in the HTML looks like:

```html
<div class="video-frame yt-embed" data-yt="" data-title="Challenge 1 — Introduction"></div>
```

Paste the YouTube video ID (the part after `watch?v=` in the URL) into `data-yt`, e.g. `data-yt="dQw4w9WgXcQ"`, and the player appears automatically. There is one slot on `index.html` (the pitch) and five on `journey.html`.

## Replacing placeholder images

Overwrite the labeled SVG files in `assets/images/` (e.g. `placeholder-landfill.svg`) with real photos of the same name — no HTML changes needed.

## Team

Patrick Rwema · Awan Liakat · Erica Atete · Liam Onyango · Obichukwu Nwosu

*Flowing Towards A Greener Future* 🌿
