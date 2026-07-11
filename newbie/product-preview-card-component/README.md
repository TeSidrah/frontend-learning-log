# Product Preview Card Component

A solution to the [Product Preview Card Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UnhZFS).

Built as part of ongoing Frontend Mentor practice, Newbie → Junior path. HTML and CSS only, no JavaScript.

## What this is

A responsive product card — mobile layout stacks the image above the content, desktop switches to a side-by-side layout at 768px. Built to match the provided design exactly, then revisited for a self-review pass focused on semantic correctness and accessibility rather than just visual output.

## What changed in review

The first version looked right but had a few things done for the wrong reasons:

- **Keyboard focus was accidentally removed** — the button's default focus outline had been stripped as part of the hover styling. Added it back specifically for keyboard users via `:focus-visible`, so mouse clicks stay clean but tabbing through the page still shows a clear focus state.
- **Wrong tag for the strikethrough price** — the original price was marked up as a `<sub>` element because it happened to render the way I wanted. Replaced it with `<del>`, the correct semantic tag for that content, and styled it directly instead of relying on a side effect.
- **Unused font weights were being downloaded** — trimmed the Google Fonts request down to only the weights actually used.
- **Broken font fallback** — the CSS fallback chain named an unrelated font as a backup. Replaced it with a generic `serif` fallback so the layout degrades sensibly if the primary font fails to load.
- **Overlapping spacing rules** — several margin/gap declarations were fighting each other across breakpoints. Consolidated into one place so the spacing logic is legible and easy to adjust.

## Built with

- Semantic HTML5
- CSS (Flexbox, media queries)
- Google Fonts (Fraunces, Montserrat)

## Live site

https://tesidrah.github.io/product-preview-card-component/

## Author

TeSidrah — [Frontend Mentor profile link] · [GitHub profile](https://github.com/TeSidrah)
