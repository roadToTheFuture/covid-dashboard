import { createDomElement } from '@js/utils/createDomElement.js';
import { global } from '@js/elements/main/slider/slider.js';

const globalGraph = createDomElement('div', 'graph', '', global);
const globalCanvas = createDomElement('canvas', '', '', globalGraph);

export { globalGraph, globalCanvas };
