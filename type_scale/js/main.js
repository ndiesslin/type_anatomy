/**
 * Modular Type Scale Calculator Logic
 */

const baseSizeInput = document.getElementById('base-size');
const ratioSelect = document.getElementById('ratio-select');
const previewContainer = document.querySelector('.scale-visualizer');
const cssOutput = document.getElementById('css-output');
const cssCode = document.getElementById('css-code');
const copyBtn = document.getElementById('copy-css-btn');

const ratioDescContainer = document.getElementById('ratio-desc');

// Default strings to display at different levels
const sampleTexts = [
    "A Visual Type Scale", // XXL
    "Typography Matters", // XL
    "Modular Scales", // L
    "The quick brown fox jumps over the lazy dog", // M (Body)
    "The quick brown fox jumps over the lazy dog", // S
    "The quick brown fox jumps over the lazy dog"  // XS
];

const ratioDescriptions = {
    "1.067": "<strong>Minor Second (1.067)</strong>: Contrasting only slightly, this ratio is perfect for mobile screens where space is limited.",
    "1.125": "<strong>Major Second (1.125)</strong>: A gentle progression suitable for text-heavy pages where header hierarchy doesn't need to be aggressive.",
    "1.200": "<strong>Minor Third (1.200)</strong>: A versatile standard for web design, balancing distinct steps with practical sizing.",
    "1.250": "<strong>Major Third (1.250)</strong>: A popular choice for clear hierarchy. Great for blogs and marketing sites.",
    "1.333": "<strong>Perfect Fourth (1.333)</strong>: A strong scale that establishes clear order. Often used in traditional book design.",
    "1.414": "<strong>Augmented Fourth (1.414)</strong>: A very distinct scale. Headings will quickly become much larger than body text.",
    "1.500": "<strong>Perfect Fifth (1.500)</strong>: High contrast. Useful for posters or designs where big headlines need to shout.",
    "1.618": "<strong>Golden Ratio (1.618)</strong>: The most dramatic natural ratio. Creates beautiful, sweeping differences between sizes."
};

function init() {
    baseSizeInput.addEventListener('input', updateScale);
    ratioSelect.addEventListener('change', updateScale);
    copyBtn.addEventListener('click', copyCSS);

    // Initial render
    updateScale();
}

function updateScale() {
    const baseSize = parseFloat(baseSizeInput.value);
    const ratioVal = ratioSelect.value;
    const ratio = parseFloat(ratioVal);

    if (isNaN(baseSize) || baseSize <= 0) return;

    // Update Description
    ratioDescContainer.innerHTML = ratioDescriptions[ratioVal] || "";

    previewContainer.innerHTML = '';

    // We'll generate a scale: 3 steps up, base, 2 steps down
    // Steps: 3, 2, 1, 0 (base), -1, -2

    // Let's create an array of steps objects
    const steps = [];

    // Generate ranges: 
    // +4 (4xl)
    // +3 (3xl)
    // +2 (2xl)
    // +1 (xl)
    // 0 (base)
    // -1 (sm)
    // -2 (xs)

    for (let i = 4; i >= -2; i--) {
        const val = Math.pow(ratio, i);
        const px = baseSize * val;
        const rem = val; // Assuming base is 1rem

        // Label mapping
        let label = `--text-${i}xl`;
        if (i === 1) label = "--text-lg"; // fix: xl usually > lg
        if (i === 0) label = "--text-base";
        if (i === -1) label = "--text-sm";
        if (i === -2) label = "--text-xs";

        // Correcting common naming convention (tailwind-ish)
        // 4: 4xl
        // 3: 3xl
        // 2: 2xl
        // 1: xl
        // 0: base
        // -1: sm
        // -2: xs

        // Wait, loop:
        // i=4 -> 4xl
        // i=3 -> 3xl
        // i=2 -> 2xl
        // i=1 -> xl
        // i=0 -> base
        // ...

        steps.push({
            scaleIndex: i,
            label: label,
            px: px.toFixed(2),
            rem: rem.toFixed(3)
        });
    }

    renderVisuals(steps);
    renderCSS(steps);
}

function renderVisuals(steps) {
    steps.forEach(step => {
        const row = document.createElement('div');
        row.className = 'scale-step';

        const meta = document.createElement('div');
        meta.className = 'meta';
        meta.innerHTML = `
            <span class="label">${step.label}</span>
            <span>${step.px}px</span>
            <span>${step.rem}rem</span>
        `;

        const sample = document.createElement('div');
        sample.className = 'sample';
        sample.textContent = getSampleText(step.scaleIndex);
        sample.style.fontSize = `${step.px}px`;

        row.appendChild(meta);
        row.appendChild(sample);
        previewContainer.appendChild(row);
    });
}

function renderCSS(steps) {
    let css = `:root {\n`;
    steps.forEach(step => {
        css += `  ${step.label}: ${step.rem}rem; /* ${step.px}px */\n`;
    });
    css += `}`;

    cssCode.textContent = css;
    cssOutput.style.display = 'block';
}

function getSampleText(index) {
    if (index >= 3) return "Modular Scale";
    if (index === 2) return "Visual Hierarchy";
    if (index === 1) return "Subheading Text";
    if (index === 0) return "Body text should be readable and comfortable.";
    return "Caption text for small details.";
}

function copyCSS() {
    const text = cssCode.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied!";
        copyBtn.style.background = "#27ae60"; // Green

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = "";
        }, 2000);
    });
}

init();
