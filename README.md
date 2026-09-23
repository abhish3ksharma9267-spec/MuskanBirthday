# Muskan Birthday Website ❤️

A static, mobile-friendly cinematic birthday website for Muskan, dated 24 September 2026.

## Included

- Countdown to 24 September 2026, 12:00 AM India time
- Birthday reveal animation
- The supplied photo in `assets/muskan-photo.jpg`
- Heartfelt letter
- Official YouTube embed for "Until I Found You" by Stephen Sanchez
- Night sky + shooting-star style wish interaction
- Dreamy garden section
- Five birthday wish cards
- Final surprise
- Five-click secret star
- Responsive design
- Reduced-motion support
- No backend or database required

## Host free with GitHub Pages

GitHub Pages can publish static HTML/CSS/JavaScript files from a GitHub repository.

1. Create a free GitHub account if needed.
2. Create a new **public** repository, for example `muskan-birthday`.
3. Upload everything inside this folder. Make sure `index.html` is at the repository root.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose `main` and `/ (root)`, then Save.
7. GitHub will give you a shareable `github.io` address.

GitHub says publishing can take up to about 10 minutes after changes are pushed.

## Important

The photo is the original supplied image and is referenced as:

`assets/muskan-photo.jpg`

Do not rename or move it unless you also update the path in `index.html`.

The song is not hosted in this project. The site embeds the official YouTube video instead, so no copyrighted audio file is copied into the website.

## Editing the letter

Open `index.html` and search for:

`A Little Letter For Muskan`

Edit the paragraphs underneath it.

## Changing the date

The countdown target is defined at the top of `script.js`:

`2026-09-24T00:00:00+05:30`

## Local preview

Double-click `index.html` to preview most features. For the cleanest test, use a simple local web server or GitHub Pages after upload.

## No backend required

This is a static site. It does not collect names, emails, passwords, or other visitor data.
