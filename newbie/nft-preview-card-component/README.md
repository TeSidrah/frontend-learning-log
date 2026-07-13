# NFT Preview Card Component

A Newbie-tier challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U) — building a static preview card for an NFT listing: image with a hover state, title, price, countdown, and creator info.

**Live demo:** https://tesidrah.github.io/frontend-learning-log/newbie/nft-preview-card-component/

This is a Newbie-tier practice project, one step toward Junior — not client-ready work. It's here as evidence of the build-and-fix process, not a finished product.

## What I built

A single card component using flexbox for layout, with a two-image hover effect (base image + overlay image, switched with `position` and `opacity`) — the first time I worked with `position` this way.

## Bugs I found and fixed

- The ETH and countdown icons weren't lined up with their text — fixed with flex alignment and a gap.
- The hover overlay had square corners while the image underneath was rounded — matched the border radius between the two.
- The overlay color was too light and let too much of the image show through. I tried an opacity of 0.85 first, compared it side by side with the reference, and landed on 0.5.
- The title and creator name were meant to act like links (turning cyan on hover) but were plain text with no real link behavior. I wrapped them in actual `<a>` tags so they're clickable, focusable, and styled correctly on hover and focus — and picked up the difference between `href="#"` and `href=""` along the way (an empty `href` reloads the page).

## Smaller fixes

- More accurate, descriptive alt text on images.
- Updated `hsl()` color syntax to the modern format.

## What I decided to skip

Frontend Mentor suggested swapping `<figure>`/`<figcaption>` for a plain `<div>`/`<p>` for better semantics. I decided it wasn't worth the extra CSS changes right now — noting it for next time instead of doing it just to check a box.

## Still open

Haven't added explicit `width`/`height` to the images yet to stop layout shift while they load. I understand why CSS alone doesn't solve this and that the real fix needs pixel dimensions in the HTML — I just haven't measured the actual image files yet.
