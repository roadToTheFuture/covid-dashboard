import { createDomElement } from '@js/utils/createDomElement.js';
import { main } from '@js/elements/body/body.js';

const container = createDomElement('div', 'swiper-container', '', main);
const wrapper = createDomElement('div', 'swiper-wrapper', '', container);

const global = createDomElement('div', 'swiper-slide', '', wrapper, 'id', 'global');
const individual = createDomElement('div', 'swiper-slide', '', wrapper, 'id', 'individual');

createDomElement('div', 'swiper-pagination', '', container);

export {
  global, individual,
};
