import { createDomElement } from '@js/utils/createDomElement.js';
import { global } from '@js/elements/main/slider/slider.js';

const table = createDomElement('div', 'table', '', global);

const info = createDomElement('div', 'table__info', '', table);
createDomElement('p', 'table__info_title', 'Global Cases', info);
createDomElement('p', 'table__info_number', '74 248 878', info);

createDomElement('div', 'table__indicators', '', table);

const buttons = createDomElement('div', 'table__buttons', '', table);

createDomElement('button', 'table__button', 'Global Deaths', buttons);
createDomElement('button', 'table__button', 'Global Recovered', buttons);
createDomElement('button', 'table__button', 'per / 100th', buttons);
