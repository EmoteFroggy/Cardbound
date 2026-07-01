// Home page interactions: nav scroll, reveal animations

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('site-nav');

    // Nav background on scroll
    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Intersection Observer for scroll reveals
    const revealEls = document.querySelectorAll(
        '.watch-section .section-label, .watch-section .section-heading, .watch-section .section-desc, .timeline-teaser .section-label, .timeline-teaser .section-heading, .timeline-teaser .section-desc, .book-section .section-label, .book-section .section-heading, .book-section .section-desc, .book-visual, .book-features, .book-cta'
    );

    const watchBtns = document.querySelectorAll('.watch-btn');
    const timelineLink = document.querySelector('.timeline-link');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    watchBtns.forEach((btn, idx) => {
        btn.style.transitionDelay = `${idx * 0.12}s`;
        observer.observe(btn);
    });

    if (timelineLink) observer.observe(timelineLink);

    // Initialize timeline teaser background animation
    function initTimelineTeaserBG() {
        const teaserSection = document.querySelector('.timeline-teaser');
        // Only run if we are on the main page and timelineEvents is available
        if (!teaserSection || typeof timelineEvents === 'undefined') return;

        // Get one event from each unique year to form exactly 12 cards
        const uniqueYears = [];
        const teaserEvents = [];
        for (const ev of timelineEvents) {
            if (!uniqueYears.includes(ev.year)) {
                uniqueYears.push(ev.year);
                teaserEvents.push(ev);
            }
            if (teaserEvents.length === 12) break;
        }

        const bgContainer = document.createElement('div');
        bgContainer.className = 'teaser-cards-bg';

        const track = document.createElement('div');
        track.className = 'teaser-cards-track';
        
        // We reuse the same 6 card DOM elements and just change their content
        const cards = [];
        for (let i = 0; i < 6; i++) {
            if (i === 3) {
                const spacer = document.createElement('div');
                spacer.className = 'teaser-spacer';
                track.appendChild(spacer);
            }
            const card = document.createElement('div');
            card.className = 'teaser-card';
            card.innerHTML = `<img src="" alt=""><div class="year"></div>`;
            track.appendChild(card);
            cards.push(card);
        }
        
        bgContainer.appendChild(track);
        // Prepend so it sits behind the inner content
        teaserSection.insertBefore(bgContainer, teaserSection.firstChild);
        
        let currentSet = 0; // 0 or 1
        let isPlaying = false;
        
        async function playCycle() {
            if (!isPlaying) return;
            
            const startIndex = currentSet * 6;
            // Update cards text and image for the current set
            for (let i = 0; i < 6; i++) {
                // Safely grab the event (fallback if we don't have enough)
                const event = teaserEvents[startIndex + i] || teaserEvents[0];
                const card = cards[i];
                card.querySelector('img').src = event.image || '';
                card.querySelector('.year').textContent = event.year;
                card.classList.remove('active');
            }
            
            // Sequential fade in
            for (let i = 0; i < 6; i++) {
                if (!isPlaying) return;
                await new Promise(r => setTimeout(r, 1200));
                cards[i].classList.add('active');
            }
            
            if (!isPlaying) return;
            // Wait while they are all visible
            await new Promise(r => setTimeout(r, 3500));
            
            if (!isPlaying) return;
            // Fade out all at once
            cards.forEach(c => c.classList.remove('active'));
            
            if (!isPlaying) return;
            // Wait for fade out CSS transition to finish
            await new Promise(r => setTimeout(r, 900));
            
            // Switch set and loop
            currentSet = (currentSet + 1) % 2; // loops between 0 and 1 (12 total items)
            playCycle();
        }
        
        // Start animation when section comes into view
        const bgObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (!isPlaying) {
                    isPlaying = true;
                    playCycle();
                }
                bgObserver.disconnect(); // Never pause it once it starts, fixes overlap bug
            }
        }, { threshold: 0.1 });
        bgObserver.observe(teaserSection);
    }
    
    initTimelineTeaserBG();

});
