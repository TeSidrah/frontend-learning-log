# Frontend Mentor — Stats Preview Card Component

A stats preview card built from a [Frontend Mentor](https://www.frontendmentor.io) challenge. Two-column layout on desktop — copy and stats on the left, a purple-tinted image on the right — that collapses to a single stacked column on mobile with the image on top.

## Live Site

[View live site](#) <!-- add deployed URL -->

## Built With

- Semantic HTML5
- CSS custom properties
- Mobile-first responsive design (flexbox)

## What I Learned

**Flex properties only apply one level deep.** Put `flex: 1` on the `<img>` instead of its parent `.card-img` and nothing happened — flex only affects direct children of the flex container.

**`mix-blend-mode: multiply` for image tinting.** `filter` washes out the photo underneath; `multiply` blends a colored overlay while letting the image texture show through. Adjusting the overlay color's lightness controlled the intensity — opacity had no visible effect here.

**Padding on the parent beats margin on the child for safe centering.** On short viewports, margin on a flex child gets ignored once it overflows. Padding on `body` held the layout correctly instead.

**Mobile styles need explicit resets at larger breakpoints.** `max-width: 25rem` set for mobile was still active at desktop, squeezing content even though the layout had switched to two columns. Overriding it in the media query fixed it.

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/TeSidrah