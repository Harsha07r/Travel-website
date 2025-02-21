new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // RESPONSIVE breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

//# sourceMappingURL=index.672d4772.js.map
