# Social Links Profile

A social links profile card built with HTML and CSS.

## What it demonstrates

The avatar, name, and location are wrapped in `<figure>` and
`<figcaption>` — they belong together as one unit, and the semantic
relationship is worth marking up explicitly.

Hover and focus states are set together on the link buttons. Mouse
users and keyboard users get the same visual response — not just
`:hover` alone.

The root font size is set as a percentage (`87.5%`) rather than a
fixed `px` value. This means the base size respects the user's browser
font size settings instead of overriding them. All sizes in the
stylesheet use `rem`, so they scale relative to that base.

`min-height: 100dvh` is used instead of `height: 100dvh` — `height`
clips the card when content grows or the viewport shrinks. `min-height`
lets the container expand, with `padding: 2rem 0` added as a fallback
so the card never sits flush against the edges when it overflows.
`align-items: center` is kept alongside `min-height` — without it,
flex children stretch to fill the full height instead of staying
centered.

Colors and weights are set as CSS custom properties on `:root`,
consistent with the same approach used across all TeSidrah frontend
work.

## Live preview

https://tesidrah.github.io/social-links-profile/

## Challenge

Frontend Mentor — Social links profile  
https://www.frontendmentor.io/solutions/social-links-profile-flexbox-layout-IrgWOAtSBC
