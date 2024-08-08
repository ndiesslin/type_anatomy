// Hide intro.
const introElement = document.querySelector('.intro');
function hideIntro() {
  introElement.style.display = 'none';
}

// Memoization cache.
const memoizedResults = {};

// Replace description with which anatomy is clicked.
const anatomyNotesElement = document.querySelector('.anatomy-notes');
function showDescription(description) {
  // Check if the result is already cached
  if (memoizedResults[description]) {
    anatomyNotesElement.innerHTML = memoizedResults[description];
    return;
  }

  // Compute the result and cache it.
  const result = `<p>${description}</p>`;
  memoizedResults[description] = result;
  anatomyNotesElement.innerHTML = result;
}

// Replace image with which anatomy is clicked.
const letterImageElement = document.querySelector('.letter-image');
function showImage(src) {
  // Check if the result is already cached
  if (memoizedResults[src]) {
    letterImageElement.style.backgroundImage = memoizedResults[src];
    return;
  }

  // Compute the result and cache it.
  const result = `url(${src})`;
  memoizedResults[src] = result;
  letterImageElement.style.backgroundImage = result;
}

const navClickElements = document.querySelectorAll('.definition');
navClickElements.forEach(element => {
  element.addEventListener('click', (event) => {
    navClickElements.forEach(element => {
      element.classList.remove('active');
    });
    element.classList.add('active');

    hideIntro();

    // Set letter image.
    let letterImage = element.parentElement.querySelector('img').src;
    showImage(letterImage);

    // Set description.
    let description = element.parentElement.querySelector('.anatomy-description').innerHTML;
    showDescription(description);
  });
});

// Toggle button to toggle target.
const toggleButtonElements = document.querySelectorAll('.toggle-button');
toggleButtonElements.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior for links

    // Toggle show class on the clicked element.
    event.target.classList.toggle('show');

    const targetName = event.target.dataset.toggleTarget;
    const targetElement = document.querySelector(`[data-toggle-name="${targetName}"]`);

    if (targetElement) {
      targetElement.classList.toggle('show');
    }
  });
});

// All enter clicks register as a mouse click.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter is clicked.', document.activeElement);
    // Simulate a mouse click event
    const clickEvent = new MouseEvent('click');
    document.activeElement.dispatchEvent(clickEvent);
  }
});