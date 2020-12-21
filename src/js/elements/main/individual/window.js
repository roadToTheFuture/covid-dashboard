import { createDomElement } from '@js/utils/createDomElement.js';
import { individual } from '@js/elements/main/slider/slider.js';

const window = createDomElement('div', 'window', '', individual);
createDomElement('div', 'window__graph active', '', window);

const map = createDomElement('div', 'window__map', '', window);
createDomElement('div', 'window__map', '', map, 'id', 'mapid');
