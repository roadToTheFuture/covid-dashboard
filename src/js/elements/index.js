import '@js/elements/body/body.js';
import '@js/elements/header/header.js';
import '@js/elements/footer/footer.js';
import '@js/elements/main/main.js';

import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 1000,
  simulateTouch: false,
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-wrapper',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
});
