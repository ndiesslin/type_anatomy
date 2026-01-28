const headingSelect = document.getElementById('heading-font');
const bodySelect = document.getElementById('body-font');
const previewArticle = document.querySelector('article');
const presetButtons = document.querySelectorAll('.preset-btn');

// Elements that should use Heading Font (Serif)
// We apply font-family directly via CSS variable or style injection?
// Let's use direct style manipulation on the preview for simplicity.

function updateFonts() {
    const headingFont = headingSelect.value;
    const bodyFont = bodySelect.value;

    // Apply to Headings
    const headings = previewArticle.querySelectorAll('h1, h2, h3, h4, h5, h6, blockquote');
    headings.forEach(el => {
        el.style.fontFamily = headingFont;
    });

    // Apply to Body
    const bodyText = previewArticle.querySelectorAll('p, li, span, div:not(h1):not(h2)');
    // Easier: apply to article and override headings
    previewArticle.style.fontFamily = bodyFont;

    // Re-apply headings because article style might cascade? 
    // No, standard CSS specificity usually handles this, but inline styles are strongest.
    // So if we set article inline style, p inherits. h1 inherits unless overridden.
    // So we MUST set inline style on H tags too.
}

// Event Listeners
headingSelect.addEventListener('change', updateFonts);
bodySelect.addEventListener('change', updateFonts);

// Presets
presetButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const heading = e.target.dataset.heading;
        const body = e.target.dataset.body;

        headingSelect.value = heading;
        bodySelect.value = body;

        updateFonts();
    });
});

// Init
updateFonts();
