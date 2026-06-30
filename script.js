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
});
