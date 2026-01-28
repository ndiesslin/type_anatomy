const leadingRange = document.getElementById('leading-range');
const trackingRange = document.getElementById('tracking-range');
const measureRange = document.getElementById('measure-range');

const leadingVal = document.getElementById('leading-val');
const trackingVal = document.getElementById('tracking-val');
const measureVal = document.getElementById('measure-val');

const leadingFeedback = document.getElementById('leading-feedback');
const trackingFeedback = document.getElementById('tracking-feedback');
const measureFeedback = document.getElementById('measure-feedback');
const overallStatus = document.getElementById('overall-status');

const textContainer = document.getElementById('text-container');

function updateTypography() {
    const leading = parseFloat(leadingRange.value);
    const tracking = parseFloat(trackingRange.value);
    const measure = parseInt(measureRange.value);

    // Apply styles
    textContainer.style.lineHeight = leading;
    textContainer.style.letterSpacing = tracking + 'px';
    textContainer.style.maxWidth = measure + 'px';

    // Update Display Values
    leadingVal.textContent = leading.toFixed(1);
    trackingVal.textContent = tracking + 'px';
    measureVal.textContent = measure + 'px';

    // Evaluate
    const leadingScore = evaluateLeading(leading);
    const trackingScore = evaluateTracking(tracking);
    const measureScore = evaluateMeasure(measure);

    updateFeedbackDisplay(leadingFeedback, leadingScore);
    updateFeedbackDisplay(trackingFeedback, trackingScore);
    updateFeedbackDisplay(measureFeedback, measureScore);
    
    updateOverallStatus([leadingScore, trackingScore, measureScore]);
}

function evaluateLeading(val) {
    if (val < 1.3) return { status: 'bad', text: "Too Tight! Lines are crashing." };
    if (val > 1.8) return { status: 'warn', text: "Too Loose! Eyes get lost." };
    return { status: 'good', text: "Perfect! Comfortable reading breathing room." };
}

function evaluateTracking(val) {
    if (val < -0.5) return { status: 'bad', text: "Too Cramped! Letters colliding." };
    if (val > 1.5) return { status: 'warn', text: "Too Airy! Words breaking apart." };
    return { status: 'good', text: "Great! Distinct characters." };
}

function evaluateMeasure(val) {
    // Approx 45-75 chars. Using px as proxy roughly 500-700px for this font size?
    if (val > 800) return { status: 'bad', text: "Too Wide! The eye fatigues returning." };
    if (val < 400) return { status: 'warn', text: "Too Narrow! Constant line breaking." };
    return { status: 'good', text: "Ideal Line Length (45-75 chars)." };
}

function updateFeedbackDisplay(el, result) {
    el.textContent = result.text;
    el.className = 'feedback ' + result.status;
}

function updateOverallStatus(results) {
    const allGood = results.every(r => r.status === 'good');
    const hasBad = results.some(r => r.status === 'bad');
    
    if (allGood) {
        overallStatus.innerHTML = "Status: <strong>Excellent Readability!</strong>";
        overallStatus.className = 'overall-status success';
    } else if (hasBad) {
        overallStatus.innerHTML = "Status: <strong>Hard to Read</strong>";
        overallStatus.className = 'overall-status';
    } else {
        overallStatus.innerHTML = "Status: <strong>Getting There...</strong>";
        overallStatus.className = 'overall-status';
    }
}

// Event Listeners
leadingRange.addEventListener('input', updateTypography);
trackingRange.addEventListener('input', updateTypography);
measureRange.addEventListener('input', updateTypography);

// Init
updateTypography();
