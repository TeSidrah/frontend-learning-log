# Results Summary Component

Frontend Mentor challenge — Newbie tier.

A two-panel results card: a gradient result panel showing a score and percentile note, and a summary panel with four category rows and a continue button. Built with HTML and CSS, mobile-first.

---

## What this is

Practice toward Frontend Mentor Newbie → Junior. Not client work — a deliberate learning exercise, worked through carefully.

---

## Built with

- Semantic HTML5
- CSS (mobile-first, single breakpoint at 1024px)
- Google Fonts — Hanken Grotesk

---

## What I worked on

**Correct element choice.** The Continue button started as a `span`. Changed it to a proper `button` — the right element for something interactive, and what keyboard users and assistive technology expect.

**Color accuracy.** The result panel gradient and the score circle were both using the wrong color stops. Fixed both by going back to the style guide values — the panel now runs from a lighter purple at the top to a deeper blue at the bottom, as designed.

**`out-of` text.** The "of 100" under the score number needed its own element to be styled independently. Wrapped it in a `span` and gave it the soft lavender the design calls for, separate from the bright white of the score itself.

**Summary layout.** Rebuilt the category rows from a table-like structure to stacked flex boxes — icon and label on the left, score on the right. Used `gap` on the parent to space them, not margin on each item. Cleaner and more predictable.

**Button states.** Added hover and focus states — the button switches to the same purple-to-blue gradient as the result panel. Required by the challenge, and a detail worth getting right.

**`dvh` over `vh`.** Used `min-height: 100dvh` on the body instead of `vh`. Handles mobile browser chrome (address bar height) correctly — `vh` doesn't.

---

## Live demo

https://tesidrah.github.io/results-summary-component/

---

## Challenge

[Frontend Mentor — Results Summary Component](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV)
