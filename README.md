# David Drexlin — personal academic website

Static website for https://david-drexlin.github.io/.

## Publish with GitHub Pages

In this repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then click **Save**. No package manager, build step, or custom Actions workflow is required. `.nojekyll` enables direct static publishing.

The URL above becomes available after Pages is enabled and the deployment succeeds. No custom domain has been configured.

## Files

- `index.html`: approved biography, institutional links, contact buttons, and publications.
- `style.css`: responsive Helvetica/system-font styling with a light cream background (`#FCFBF6`) and optional dark appearance.
- `script.js`: appearance toggle and BibTeX copy buttons.
- `assets/portrait.svg`: the approved edited outdoor portrait, stored as a self-contained SVG wrapper around a compressed raster image.
- `assets/registers-figure-1.svg` and `assets/medi-figure-1.svg`: the approved first figures from the two publications, also stored as self-contained raster-in-SVG assets. These are not vector reconstructions of the figures.

All images are served from this repository. The page has no external font requests, tracking scripts, cookies, or local storage. Ordinary outbound links lead to the cited publications, code repositories, institutional pages, and contact profiles. Hosting-provider logging is separate from the page itself.

## Edit and preview

Edit the text in `index.html` or the appearance in `style.css`, then commit to `main`. After the initial Pages setup, commits to the publishing branch are deployed automatically.

For a local preview, run this command from the repository directory and open http://localhost:8000/:

```sh
python3 -m http.server 8000
```

The website uses Helvetica when it is installed, with Helvetica Neue, Arial, and sans-serif fallbacks. No font files are distributed.

## Publication assets

Figures are from:

- David Jacob Drexlin, Julius Hense, Jonas Dippel. *Decoding Register Tokens Preserves Global Scene Details* (2026). https://arxiv.org/abs/2610.13299
- David Jacob Drexlin et al. *MeDi: Metadata-Guided Diffusion Models for Mitigating Biases in Tumor Classification*. MICCAI 2025. https://arxiv.org/abs/2506.17140

Publication review status is supplied by the author and should be updated when it changes. Figure and portrait rights are not automatically licensed for reuse by this repository.

Before final public promotion, review any applicable legal-notice and privacy-disclosure requirements for the chosen hosting setup. This repository does not claim to include a completed legal notice or privacy policy.
