document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 1, // Display one slide at a time
        spaceBetween: 50, // Space between slides in px
        centeredSlides: true, // Center the active slide
        // If you want pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Background Music Controls
    const audio = document.getElementById('background-music');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const volumeSlider = document.getElementById('volume-slider');

    // Set initial volume
    audio.volume = volumeSlider.value;

    playBtn.addEventListener('click', function() {
        audio.play();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value;
    });
}); 