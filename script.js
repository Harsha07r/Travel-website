 new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:30,
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
    autoplay: {
      delay: 3000, // Time between slides in milliseconds (3 seconds)
      disableOnInteraction: false, // Keep autoplay active after user interactions
  },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
        },
    }
  
    // And if we need scrollbar
   
  });
 

