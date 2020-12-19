import { createDomElement } from '@js/utils/createDomElement.js';
import { global } from '@js/elements/main/slider/slider.js';

const table = createDomElement('div', 'table', '', global);

const info = createDomElement('div', 'table__info', '', table);
const title = createDomElement('p', 'table__info_title', 'Global Cases', info);
const counter = createDomElement('p', 'table__info_counter', '74 248 878', info);

const indicators = createDomElement('div', 'table__indicators', '', table);

const button = createDomElement('div', 'table__button', '', table);
const death = createDomElement('button', 'table__button_death', 'Global Deaths', button);
const recovered = createDomElement('button', 'table__button_recovered', 'Global Recovered', button);
const calculate = createDomElement('button', 'table__button_calculate', 'per / 100th', button);

export {
  info, title, counter,
  indicators,
  death, recovered, calculate,
};
