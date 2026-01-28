/**
 * Kerning Game Logic
 */

const stage = document.getElementById('stage');
const compareBtn = document.getElementById('compare-btn');
const nextBtn = document.getElementById('next-btn');
const resultsArea = document.getElementById('results-area');
const resultMessage = document.getElementById('result-message');
const scoreDisplayResult = document.querySelector('.score-final');

// Words to practice on
const words = [
    {
        text: "Type",
        font: "'Libre Baskerville', serif",
        letterSpacing: "0.05em", // Reduced to prevent "too far" look while relying on offsets
        // Move 'p' (2) Right +12 to fix y/p overlap.
        // Move 'e' (3) Right +12 to fix p/e overlap (maintain distance from p).
        manualOffsets: { 2: 12, 3: 12 }
    },
    { text: "Avatar", font: "'Open Sans', sans-serif" },
    { text: "Kerning", font: "'Libre Baskerville', serif" },
    { text: "Typography", font: "'Open Sans', sans-serif" },
    { text: "Design", font: "'Libre Baskerville', serif" },
    { text: "Spacing", font: "'Open Sans', sans-serif" },
    { text: "Visual", font: "'Libre Baskerville', serif" },
    { text: "Rhythm", font: "'Open Sans', sans-serif" }
];

let currentWordIndex = 0;
let letters = [];
let targetPositions = [];

// Initialize game
function init() {
    loadWord(currentWordIndex);

    compareBtn.addEventListener('click', calculateScore);
    nextBtn.addEventListener('click', nextWord);

    // Global mouse up to stop dragging anywhere
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
}

function loadWord(index) {
    // Reset state
    stage.innerHTML = '';
    letters = [];
    targetPositions = [];
    resultsArea.style.display = 'none';
    compareBtn.style.display = 'inline-block';

    const wordObj = words[index];
    const text = wordObj.text;
    const font = wordObj.font;
    const spacing = wordObj.letterSpacing || "0";
    const offsets = wordObj.manualOffsets || {};

    // 1. Calculate Target Positions (The "Correct" Answer)
    // We create a temporary hidden span to measure how the browser renders the word naturally
    const measureSpan = document.createElement('span');
    measureSpan.style.fontFamily = font;
    measureSpan.style.fontSize = '120px'; // Match CSS
    measureSpan.style.letterSpacing = spacing; // Apply custom spacing
    measureSpan.style.visibility = 'hidden';
    measureSpan.style.position = 'absolute';
    measureSpan.style.whiteSpace = 'nowrap';
    measureSpan.textContent = text;
    document.body.appendChild(measureSpan);

    // We need to establish a starting LEFT position on the stage. 
    // Let's center the word loosely.
    const stageWidth = stage.clientWidth;
    const wordWidth = measureSpan.getBoundingClientRect().width;
    const startX = (stageWidth - wordWidth) / 2;

    document.body.removeChild(measureSpan);

    // Now we need to know the width of each letter individually to calculate their natural accumulating offset
    // BUT measuring individual letters doesn't account for built-in kerning pairs in the font file.
    // So we need to measure substrings: "T", "Ty", "Typ", "Type"

    let accumulatedWidth = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        // Create the interactive letter
        const el = document.createElement('div');
        el.className = 'letter';
        el.textContent = char;
        el.style.fontFamily = font;
        el.style.letterSpacing = spacing; // Apply here too so char width matches? No, divs are absolute. 
        // Actually letter-spacing on the char div itself doesn't matter much if it's one char, 
        // unless it affects the bounding box? It might. Let's apply it.
        el.dataset.index = i;

        // Calculate Target Position
        // Left of char(i) = Width of text.substring(0, i)
        // We measure the substring up to this char to know where this char SHOULD start
        // Actually, "Ty" width tells us where 'p' starts. 
        // So where 'T' starts is 0. 
        // Where 'y' starts is width("T").
        // Where 'p' starts is width("Ty").

        const subStr = text.substring(0, i);
        const subSpan = document.createElement('span');
        subSpan.style.fontFamily = font;
        subSpan.style.fontSize = '120px';
        subSpan.style.letterSpacing = spacing;
        subSpan.style.visibility = 'hidden';
        subSpan.style.position = 'absolute';
        subSpan.style.whiteSpace = 'nowrap';
        subSpan.textContent = subStr;
        document.body.appendChild(subSpan);
        const subWidth = subSpan.getBoundingClientRect().width;
        document.body.removeChild(subSpan);

        let targetLeft = startX + subWidth;

        // Apply Manual Offsets if defined
        if (offsets[i]) {
            targetLeft += offsets[i];
        }

        targetPositions.push(targetLeft);

        // Set Initial "Scrambled" Position
        // Keep the first letter fixed as an anchor? Or scramble all?
        // Usually kerning games keep the first and last fixed, or just first. 
        // Let's keep the FIRST letter Fixed at the correct position to anchor the user.
        // Scramble the others.

        if (i === 0) {
            el.style.left = targetLeft + 'px';
            el.classList.add('fixed'); // Style hint needed?
            el.style.color = '#FF6950'; // Hint that it's fixed (Accent Orange)
            // pointer-events none provided by logic check
        } else {
            // Randomize position slightly within a range
            // Spread them out evenly or randomly?
            // Let's just spread them out with consistent padding (bad kerning)
            // e.g., startX + (i * 120)
            let badLeft = startX + (i * 100) + (Math.random() * 40 - 20); // Some randomness
            el.style.left = badLeft + 'px';
        }

        // Events
        if (i !== 0) {
            el.addEventListener('mousedown', startDrag);
            el.addEventListener('touchstart', startDrag);
        }

        stage.appendChild(el);
        letters.push({
            el: el,
            currentLeft: parseFloat(el.style.left),
            targetLeft: targetLeft
        });
    }
}

// Drag Logic
let isDragging = false;
let draggedLetter = null;
let dragOffsetX = 0;

function startDrag(e) {
    if (e.target.classList.contains('fixed')) return;

    isDragging = true;
    draggedLetter = e.target;
    draggedLetter.classList.add('dragging');

    // Calculate offset
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = draggedLetter.getBoundingClientRect();
    // We want the offset relative to the element's left edge
    dragOffsetX = clientX - rect.left;
}

function drag(e) {
    if (!isDragging || !draggedLetter) return;
    e.preventDefault(); // Stop scroll on touch

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    // We need to convert page X to stage-relative X
    const stageRect = stage.getBoundingClientRect();
    let newLeft = clientX - stageRect.left - dragOffsetX;

    // Bounds checking (keep inside stage)
    if (newLeft < 0) newLeft = 0;
    if (newLeft > stageRect.width - draggedLetter.offsetWidth) newLeft = stageRect.width - draggedLetter.offsetWidth;

    draggedLetter.style.left = newLeft + 'px';
}

function stopDrag() {
    if (isDragging && draggedLetter) {
        draggedLetter.classList.remove('dragging');
        isDragging = false;
        draggedLetter = null;
    }
}

function calculateScore() {
    let totalError = 0;

    letters.forEach((item, index) => {
        const currentPos = parseFloat(item.el.style.left);
        const targetPos = item.targetLeft;
        const diff = Math.abs(currentPos - targetPos);
        totalError += diff;
    });

    // Algorithm: 100 - (error / tolerance factor)
    // Adjust tolerance based on word length?
    // Let's guess: 5px error per letter is okay? 
    // Say Total acceptable error = letters.length * 5.

    /* 
       Let's try a simple mapping:
       0 error = 100
       Large error = 0
    */

    const avgError = totalError / (letters.length - 1); // exclude fixed start

    let score = 100 - (avgError * 2);
    if (score < 0) score = 0;
    if (score > 100) score = 100;

    score = Math.round(score);

    scoreDisplayResult.textContent = score;

    // Determine dynamic message
    let msg = "";
    if (score === 100) msg = "Perfection! You have a typographer's eye.";
    else if (score >= 90) msg = "Excellent! Nearly perfect spacing.";
    else if (score >= 80) msg = "Great job! Very close.";
    else if (score >= 60) msg = "Good effort. Keep practicing.";
    else msg = "Keep trying! Focus on the evenness of space between letters.";

    resultMessage.textContent = msg;
    resultsArea.style.display = 'block';

    // Show visual feedback (Ghost / Green letters at correct pos)
    showSolution();

    compareBtn.style.display = 'none';
}

function showSolution() {
    letters.forEach(item => {
        if (!item.el.classList.contains('fixed')) {
            // Animate to correct position? Or show ghost?
            // Let's show a "Ghost" behind it in green
            const ghost = document.createElement('div');
            ghost.className = 'letter solution';
            ghost.textContent = item.el.textContent;
            ghost.style.fontFamily = item.el.style.fontFamily;
            ghost.style.letterSpacing = item.el.style.letterSpacing; // Fix: Inherit spacing
            ghost.style.left = item.targetLeft + 'px';
            stage.appendChild(ghost);
        }
    });
}

function nextWord() {
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0; // Loop or finish?
        alert("You completed all words! Starting over.");
    }
    loadWord(currentWordIndex);
}

// Start game only after the specific font is loaded
document.fonts.load('1em "Libre Baskerville"').then(function () {
    // Double check ready state just in case
    document.fonts.ready.then(function () {
        init();
    });
});
