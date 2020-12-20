import { createDomElement } from '@js/utils/createDomElement.js';
import { individual } from '@js/elements/main/slider/slider.js';

const window = createDomElement('div', 'window', '', individual);
const winGrpah = createDomElement('div', 'window__graph active', '', window);
const winMap = createDomElement('div', 'window__map', '', window);

export { winGrpah, winMap };
