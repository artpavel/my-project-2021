// burger
let burger = document.querySelector('.burger');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    let menu = document.querySelector('.menu-nav');
    menu.classList.toggle('active');
});
//slider_page HOME_banner
const slider = document.querySelector('#bedroom .swiper-container');
let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
//slider_page HOME_news
const sliderNews = document.querySelector('#newspoduct .swiper-container');
let mySwiperNews = new Swiper(sliderNews, {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1500: {
            slidesPerView: 4.1,
            spaceBetween: 20,
        }
    }

});
//slider_page HOME_parma
const sliderParma = document.querySelector('#parma .swiper-container');
let mySwiperParma = new Swiper(sliderParma, {
    slidesPerView: 1,
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});