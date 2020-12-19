import { createDomElement } from '@js/utils/createDomElement.js';

const header = createDomElement('header', '', '', document.body);
const main = createDomElement('main', '', '', document.body);
const footer = createDomElement('footer', '', '', document.body);

export {
  header, main, footer,
};
