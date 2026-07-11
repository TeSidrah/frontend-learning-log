# Blog Preview Card

A blog preview card built with HTML and CSS.

## What it demonstrates

`<main>` is the card element directly — no wrapper div needed between the body
and the card, so no layout interference to work around.

The illustration uses `alt=""` — it's decorative and adds no information, so
screen readers skip it. The avatar uses `alt="Greg Hooper"` — it's a picture
of a specific person, so the name is the correct description.

The hover state is on the `<a>` inside the `<h1>`, not on the heading itself.
A heading can't receive focus, so putting hover behavior on it would give mouse
users a visual response that keyboard users and screen reader users never get.
The link is the interactive element — that's where the state belongs.

The tag uses `align-self: flex-start` to prevent it from stretching full width.
In a flex column, children stretch by default. This tells that one element to
shrink to its content instead.

Spacing between card elements is handled with `gap` on the flex container, not
`margin-bottom` on each child. Gap only adds space between elements — not before
the first or after the last — and one rule on the parent replaces rules on every
child.

Colors and font weights are set as CSS custom properties on `:root`, scoped to
the values that actually vary.

`min-height: 100dvh` is used instead of `vh` — `dvh` accounts for dynamic
viewport changes on mobile (browser chrome appearing and disappearing), making
it safer for centering.

## Live preview

https://tesidrah.github.io/blog-preview-card/

## Challenge

Frontend Mentor — Blog preview card  
https://www.frontendmentor.io/solutions/blog-preview-card-flexbox-layout-yS3CmzvNLp
