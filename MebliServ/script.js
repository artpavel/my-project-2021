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

})