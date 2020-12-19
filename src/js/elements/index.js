import '@js/elements/body/body.js';
import '@js/elements/header/header.js';
import '@js/elements/footer/footer.js';
import '@js/elements/main/main.js';

import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});