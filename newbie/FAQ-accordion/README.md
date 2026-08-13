# FAQ Accordion

Frontend Mentor challenge — a responsive FAQ accordion built with semantic HTML, CSS, and vanilla JavaScript.

🔗 [Live demo](https://tesidrah.github.io/frontend-learning-log/newbie/FAQ-accordion/) · [Challenge](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz)

## What this is

Practice, not a finished product — part of the newbie tier of my Frontend Mentor learning log. First challenge in this repo where I added real interactivity with JavaScript rather than HTML/CSS alone.

## Built with

- Semantic HTML
- CSS (custom properties, flexbox, `:not()`, responsive breakpoint)
- Vanilla JavaScript (event delegation, `closest()`, class-based state)

## What I focused on

- Driving all visual state off a single class (`.open`) on each item, so JavaScript only ever has one thing to toggle instead of keeping multiple elements in sync
- Using `closest()` to walk up to the parent item from the click target, instead of a hardcoded `parentElement` chain
- Setting `aria-expanded` on the actual interactive element (the button, not the wrapper), including the correct default state in the HTML itself so screen reader users get accurate state before any interaction

Lighthouse: 100 across Performance, Accessibility, Best Practices, and SEO.

## Running locally

Clone the repo, open `index.html` in a browser — no build step or dependencies.