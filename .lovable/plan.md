
The user wants a wave/ripple animation when toggling the theme, instead of an instant color swap.

## Plan: Animated Theme Toggle with Circular Wave Effect

Use the **View Transitions API** (`document.startViewTransition`) to create a circular reveal/wipe effect originating from the toggle button when switching themes.

### Changes

**1. `src/components/ThemeToggle.tsx`**
- Wrap the theme change in `document.startViewTransition()` (with fallback for unsupported browsers).
- Capture the button's click coordinates (`getBoundingClientRect`) to use as the wave origin point.
- Pass the origin coords as CSS custom properties (`--x`, `--y`) on the root element.

**2. `src/index.css`**
- Add `::view-transition-old(root)` and `::view-transition-new(root)` rules.
- Use `clip-path: circle()` keyframe animation expanding from `var(--x) var(--y)` outward to a radius covering the full viewport.
- Disable default cross-fade so only the circular wipe plays.
- Duration ~600ms with smooth easing.

### How it will look
Click the moon/sun button → a circle ripples outward from that exact button position, revealing the new theme underneath like a wave washing over the screen.

### Fallback
Browsers without View Transitions support (older Firefox/Safari) keep the current instant toggle — no breakage.
