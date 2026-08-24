# 3-Column Preview Card Component

A Frontend Mentor challenge — a car rental preview card with three plans (Sedans, SUVs, Luxury), each with its own accent color, stacking to a single column on mobile and expanding to three equal-height columns on desktop.

This is a newbie-tier practice project — solving a given design brief, not client work.

## Built with

- Semantic HTML
- CSS custom properties
- Flexbox (including `flex: 1` for equal-width columns and `align-items: stretch` for equal-height columns)
- Mobile-first responsive design
- Accessible focus states (`:focus-visible`, distinct from hover)

## A few decisions worth noting

- **Hidden `<h1>`.** The design has no visible page heading, but every page needs one for screen reader users. Used a visually-hidden `sr-only` class rather than `display: none`, since `display: none` removes it from the accessibility tree too.
- **Icons are decorative.** Each panel's heading already states "Sedans," "SUVs," "Luxury," so the icons use `alt=""` rather than repeating that information.
- **Equal column heights on desktop.** Columns weren't matching height at first — each `<section>` was sizing to its own content, so the longer "Luxury" copy could claim more width and shift its own text-wrap point unpredictably. Fixed with `flex: 1` on the columns and `align-items: stretch` on the container.
- **Button pinned to the bottom.** On desktop, columns are often taller than their content needs. `margin-top: auto` on the button (as the last flex child) pushes it to the bottom of its column instead of leaving the leftover space in the wrong spot.
- **Focus vs. hover, treated as different signals.** Hover and focus-visible communicate different things (pointing vs. keyboard navigation), so focus combines the hover color-flip with its own outline rather than relying on color alone.

## Live site

[Click here](https://tesidrah.github.io/frontend-learning-log/newbie/3-column-preview-card-component/)


