// Type Classifications - Interactive Logic

(function () {
    'use strict';

    // --- Try It Text Input ---
    const tryInput = document.getElementById('try-text');
    const sampleTexts = document.querySelectorAll('.sample-text');

    tryInput.addEventListener('input', function () {
        const text = this.value || 'The quick brown fox jumps over the lazy dog';
        sampleTexts.forEach(function (el) {
            el.textContent = text;
        });
    });

    // --- Filter Tabs ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.classification-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Update active state
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(function (card) {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = '';
                    // Trigger re-animation
                    card.classList.remove('fade-in');
                    void card.offsetWidth; // force reflow
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Card Expand/Collapse ---
    cards.forEach(function (card) {
        const header = card.querySelector('.card-header');
        header.addEventListener('click', function () {
            // Close other open cards
            cards.forEach(function (c) {
                if (c !== card) c.classList.remove('expanded');
            });
            card.classList.toggle('expanded');
        });
    });

    // --- Initial animation ---
    cards.forEach(function (card, i) {
        card.style.animationDelay = (i * 0.08) + 's';
        card.classList.add('fade-in');
    });

})();
