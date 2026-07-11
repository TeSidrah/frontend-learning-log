# Recipe Page

A solution to the [Recipe Page challenge](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm) on Frontend Mentor — Newbie tier.

This is a practice project, not client work — part of working through Frontend Mentor's Newbie tier on the way toward Junior.

## What the challenge is actually testing

The brief is a single recipe page, but the real skill being practiced is picking the right HTML element for each kind of content, not just styling it:

- Prep-time values are label/value pairs, so they're marked up as `<dl>/<dt>/<dd>` — not divs with classes pretending to be a list.
- Ingredients use `<ul>`, instructions use `<ol>` — one's an unordered set, the other is sequential steps.
- Nutrition values are a real `<table>`, not a styled grid of divs.
- `<hr>` marks the breaks between sections as a sibling of each `<section>`, not nested inside one.

## Built with

- Semantic HTML5
- CSS — mobile-first, single breakpoint at 1024px for desktop
- Google Fonts: Outfit, Young Serif

No frameworks, no build step.

## Running it locally

```
git clone https://github.com/TeSidrah/recipe-page.git
cd recipe-page
open index.html
```

That's it — static HTML/CSS, nothing to install.

## Live site

https://tesidrah.github.io/recipe-page/
## A couple of things worth flagging

- Mobile wants the recipe image flush edge-to-edge; desktop wants it inset with padding. Padding on the card itself was fighting that, since padding applies to every child uniformly. Fixed by stripping padding from the base card and adding it back only inside the desktop media query, rather than patching it with negative margins.
- One real bug along the way: `list-item` styling was set on `<dt>`, which only wraps the label — not the full label/value line. Moved it to the wrapper div around both and split the layout responsibilities so the flex row and the list bullet weren't fighting over the same element.

## Design

Design files from Frontend Mentor aren't included in this repo — they're Frontend Mentor's assets, not mine to redistribute. The challenge brief is linked above.

## Acknowledgment

Challenge by [Frontend Mentor](https://www.frontendmentor.io).
