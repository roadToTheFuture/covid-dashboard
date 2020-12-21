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
const calculate = createDomElement('button', 'table__button_calculate', 'People / 100 th', button);
const cases = createDomElement('button', 'table__button_cases', 'Global Cases', button);
const date = createDomElement('button', 'table__button_date', '20.30.2020', button);

export {
  info, title, counter,
  indicators,
  death, recovered, calculate, cases, date,
};
