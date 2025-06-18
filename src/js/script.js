import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styl
// 
// es
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/src/sass/style.scss'


try {
    // init Swiper:
    new Swiper('.works__slider', {
        slidesPerView: 1,
        // configure Swiper to use modules

        loop: true,

        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                spaceBetween: 35,
            },
        },
        modules: [Navigation, Pagination],
    });
}
catch (e) {

}
