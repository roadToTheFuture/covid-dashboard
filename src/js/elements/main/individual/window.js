import { createDomElement } from '@js/utils/createDomElement.js';
import { individual } from '@js/elements/main/slider/slider.js';

const window = createDomElement('div', 'window', '', individual);

const winGrpah = createDomElement('div', 'window__graph', '', window);
const individualCanvas = createDomElement('canvas', '', '', winGrpah);

const winMap = createDomElement('div', 'window__map active', '', window);
createDomElement('div', '', '', winMap, 'id', 'mapid');

export { winGrpah, winMap, individualCanvas };
