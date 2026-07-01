document.addEventListener('DOMContentLoaded', function () {
    const video = document.createElement('video');
    video.id = 'global-bg-video';
    video.src = 'https://file.garden/adiOU0v5YCgViiM6/Docu/YTDown_YouTube_Dust-In-Motion-Dust-Overlay_Media_-AaMbj0QRAA_001_1080p.mp4';
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.style.zIndex = '0';
    video.style.pointerEvents = 'none';
    video.style.mixBlendMode = 'screen';

    // More subtle opacity by default
    video.style.opacity = '0.25';

    // CSS filter to colorize the white dust into a light pastel yellow
    video.style.filter = 'sepia(1) saturate(3) hue-rotate(5deg) brightness(1.2)';

    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.setAttribute('playsinline', '');

    // Slow down playback to 0.70 (going too low causes the frames to stutter)
    video.playbackRate = 0.70;

    // Apply main page specific adjustments
    if (document.body.classList.contains('home-page')) {
        video.style.opacity = '0.12'; // More transparent
        video.playbackRate = 0.55; // Slower
    }

    // Loop the first 14 seconds
    video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 15) {
            video.currentTime = 0;
            video.play().catch(e => { });
        }
    });

    // Append to end of body so it sits above .vt-main's background color
    document.body.appendChild(video);

    // Force play in case of autoplay restrictions
    setTimeout(() => {
        video.play().catch(err => console.log('Autoplay prevented:', err));
    }, 100);
});
