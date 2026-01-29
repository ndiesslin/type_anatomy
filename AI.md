# Type Anatomy: AI Documentation

This file helps AI assistants understand the architecture, build systems, and development patterns used in this repository.

## Repository Overview
**Type Anatomy** is an interactive educational platform for typography. It consists of a main landing page and several standalone interactive tools.

## Core Technologies
- **HTML/JS**: Vanilla JavaScript (no frameworks).
- **Styling**: SASS (.scss) compiled to CSS.
- **Build System**: npm scripts using `sass` and `minify`.
- **Hosting**: Firebase Hosting (deployed via GitHub Actions/CI/CD).

## Project Structure
- `/`: Main landing page (`index.html`) and root SASS.
- `/type_quiz/`: Interactive typography quiz.
- `/kerning_game/`: Interactive game for practicing letter spacing.
- `/font_pairing/`: Tool for generating and previewing font combinations.
- `/readability/`: Dashboard for exploring Leading, Tracking, and Measure.
- `/sass/`: Shared root styles and partials.
    - `/sass/partials/_global-nav.scss`: The unified navigation used by all tools.
- `/js/`: Root JavaScript and minified outputs.

## Build Process
Run `npm run build` from the root to compile all styles and scripts.
- **SASS Mapping**:
    - `sass:stylesheets`
    - `type_quiz/sass:type_quiz/stylesheets`
    - `kerning_game/sass:kerning_game/stylesheets`
    - `font_pairing/sass:font_pairing/stylesheets`
    - `readability/sass:readability/stylesheets`

## Development Notes for AI
- **Unified Navigation**: New tools should import `_global-nav.scss` and use the `<nav class="global-nav">` structure.
- **SEO**: Meta tags should follow the pattern established in `type_quiz/index.html`.
- **Measurement**: For interactive tools (like Kerning), use `getBoundingClientRect()` for sub-pixel precision in text measurement.
- **Font Loading**: Always wait for `document.fonts.ready` or `document.fonts.load()` before initializing canvas or text-measurement logic to prevent race conditions.
