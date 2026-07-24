# Order Summary Component

Frontend Mentor challenge: [Order summary card](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj)

A small checkout-style component — illustration, a plan summary box, and two action elements. Built to practice semantic decisions and layout basics on a component small enough to actually reason through each choice.

## What this was practice

Deciding what "Proceed to Payment" and "Cancel Order" should actually be. The deciding question turned out to be simple: does it navigate somewhere, or does it perform an action? Link for payment, button for cancel. I'd picked the right tags going in, but not for a clear reason — this is what made the reason clear.

## Bugs I hit and fixed

- **CSS variables pointing at the wrong colors.** `--card-bg` and `--box-bg` were mismatched against the style guide early on. Caught by comparing what I'd written against the actual mockup, not just what I assumed the values should be.
- **Background images not showing up.** Background-color rendered, but the images didn't. CSS paths resolve from the CSS file's location, not the HTML file's — needed an extra `../` to step out of the `css` folder.
- **A leftover `gap: 6rem`** on `.box` that used to be substituting for a missing `width` property. Once `width: 100%` was set properly, the gap was dead weight — redundant, and a real overflow risk on small screens, even though it never actually broke in this build.

## First time doing this

- First time writing `box-shadow` — offset-x, offset-y, blur, spread, then color, and that the shadow color can be tinted to match the design instead of defaulting to gray.
- First time swapping a background-image at a breakpoint via media query, instead of using one static image.
- First time reasoning explicitly about semantic HTML (link vs. button) instead of picking whichever felt right.

## Things I looked up mid-build

- The difference between `background-repeat` and `background-size`, and what `cover` vs `contain` actually do.
- Why a button without `type="button"` behaves oddly — a default-submit trap that only matters inside a `<form>`, but worth setting regardless.
- The difference between `:focus` and `:focus-visible`, and why removing outlines entirely is an accessibility trap.

## Status

Complete. Practice build, not client-ready work — evidence of process, not a production component.
