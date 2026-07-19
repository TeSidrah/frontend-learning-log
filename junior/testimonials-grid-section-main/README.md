# Testimonials Grid Section

A Frontend Mentor challenge — first junior-tier challenge attempted, and the first real use of CSS Grid.

**Live demo:** [link]
**Challenge:** [Frontend Mentor — Testimonials grid section](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)

## What this is

A five-card testimonial grid. Mobile is a stacked Flexbox column. Desktop (1280px+) uses a single CSS Grid container with `grid-template-areas`, where one card (Kira) spans two rows next to the other four.

This is practice, not client work — logged here as evidence of what was actually learned, including the wrong turns.

## What I actually worked through

- **Two grids instead of one.** First attempt wrapped four cards in a `.group` div as its own 3-column grid, with the fifth card in a separate outer grid. Didn't work, because the row-spanning card wasn't in the same grid as the others. Fix: flatten the HTML so all five cards are direct children of one grid container.
- **`grid-template-areas`** — placing cards by name instead of column/row numbers. The CSS visually maps to the layout.
- **Row-spanning height.** A spanning grid item stretches to fill the combined height of every row and gap it spans, by default (`align-self: stretch`) — didn't need to calculate this manually.
- **Vertical stretch bug.** `align-items: stretch` was correctly matching row heights, but `justify-content: center` on `article` was then centering shorter content inside the taller box, creating dead space. Fixed with `justify-content: flex-start` to anchor content to the top.
- **`min-width` vs `max-width`.** Used `min-width` on `.card` first, which hid the problem by force-widening the container — but set a floor that caused horizontal scrollbars below that width. `max-width` was the correct property (a ceiling), which then re-exposed the real issue underneath.
- **Wrong breakpoint.** The grid genuinely didn't have room to exist at 768px. The style guide only specified 375px and 1440px — no tablet-specific layout — so the breakpoint moved to 1280px, with Flexbox stacking below that.
- **Quotation mark positioning.** Learned that `z-index` only applies to positioned elements (`position` other than `static`), and that positioned elements always paint above static ones regardless of `z-index` value — the fix was about moving elements into the "positioned" category, not just tuning a number.

## What's honest about where this stands

- The min-width/max-width detour and the breakpoint fix were the real lesson here: a fix that hides a symptom isn't the same as one that fixes the cause.
- Box-shadow values were tuned by feel, not derived from a spec.
- Typography was retuned separately for the 1280px+ layout rather than reused from mobile.

## Stack

HTML, CSS (Grid, Flexbox). No JS, no build tools.