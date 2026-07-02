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
        
        // We reuse the same 4 card DOM elements and just change their content
        const cards = [];
        for (let i = 0; i < 4; i++) {
            if (i === 2) {
                const spacer = document.createElement('div');
                spacer.className = 'teaser-spacer';
                spacer.innerHTML = `
                    <svg class="spacer-lines" viewBox="0 0 924 500" preserveAspectRatio="none">
                        <path class="spacer-line" d="M 3 127.5 L 3 50 Q 3 30 23 30 L 901 30 Q 921 30 921 50 L 921 127.5" fill="none" stroke="var(--accent-cool)" stroke-width="5" />
                        <path class="spacer-line" d="M 3 372.5 L 3 450 Q 3 470 23 470 L 901 470 Q 921 470 921 450 L 921 372.5" fill="none" stroke="var(--accent-cool)" stroke-width="5" />
                    </svg>
                `;
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
            
            const startIndex = currentSet * 4;
            // Update cards text and image for the current set
            for (let i = 0; i < 4; i++) {
                // Safely grab the event (fallback if we don't have enough)
                const event = teaserEvents[startIndex + i] || teaserEvents[0];
                const card = cards[i];
                card.querySelector('img').src = event.image || '';
                card.querySelector('.year').textContent = event.year;
                card.classList.remove('active');
            }
            cards[0].classList.remove('active-line');
            
            // Wait a tiny bit before starting the next animation cycle to ensure classes are cleared
            await new Promise(r => setTimeout(r, 50));
            if (!isPlaying) return;
            
            const spacer = track.querySelector('.teaser-spacer');
            
            // Calculate exact distance to edge of screen to keep speed perfectly constant
            const SPEED = 100; // Slower speed for the straight lines to match visual pacing
            const card1Rect = cards[0].getBoundingClientRect();
            // Add 150px to ensure the line begins drawing from well off-screen
            const inDist = Math.max(10, card1Rect.left) + 150; 
            const inDur = inDist / SPEED;
            cards[0].style.setProperty('--in-line-width', inDist + 'px');
            cards[0].style.setProperty('--in-line-duration', inDur + 's');

            const card4Rect = cards[3].getBoundingClientRect();
            const outDist = Math.max(10, window.innerWidth - card4Rect.right) + 150;
            const outDur = outDist / SPEED;
            cards[3].style.setProperty('--out-line-width', outDist + 'px');
            cards[3].style.setProperty('--out-line-duration', outDur + 's');

            // Force a browser paint to ensure the new CSS variables are registered 
            // before we trigger the CSS transition, otherwise the transition skips and pops in instantly.
            void track.offsetWidth;
            await new Promise(r => requestAnimationFrame(r));

            // 1. Line comes in from offscreen to the first card
            cards[0].classList.add('active-line');
            await new Promise(r => setTimeout(r, inDur * 1000));
            
            // 2. Line hits Card 1. Card 1 fades in, line shoots to Card 2
            if (!isPlaying) return;
            cards[0].classList.add('active');
            await new Promise(r => setTimeout(r, 600)); // 0.6s gap
            
            // 3. Line hits Card 2. Card 2 fades in, SVG lines shoot from top/bottom to Card 3
            if (!isPlaying) return;
            cards[1].classList.add('active');
            spacer.classList.add('active');
            await new Promise(r => setTimeout(r, 2500)); // 2.5s SVG

            // 4. Line hits Card 3. Card 3 fades in, line shoots to Card 4
            if (!isPlaying) return;
            cards[2].classList.add('active');
            await new Promise(r => setTimeout(r, 600)); // 0.6s gap
            
            // 5. Line hits Card 4. Card 4 fades in, line shoots offscreen
            if (!isPlaying) return;
            cards[3].classList.add('active');
            
            if (!isPlaying) return;
            // Wait for line to shoot offscreen and hold
            await new Promise(r => setTimeout(r, (outDur * 1000) + 1700));
            
            if (!isPlaying) return;
            // Fade out all at once
            cards.forEach(c => c.classList.remove('active'));
            cards[0].classList.remove('active-line');
            spacer.classList.remove('active');
            
            if (!isPlaying) return;
            // Wait for fade out CSS transition to finish
            await new Promise(r => setTimeout(r, 1200));
            
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
