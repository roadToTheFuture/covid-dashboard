import { createDomElement } from '@js/utils/createDomElement.js';
import { individual } from '@js/elements/main/slider/slider.js';

const table = createDomElement('div', 'table', '', individual);

const search = createDomElement('div', 'search', '', table);
createDomElement('input', 'search__input', '', search, 'type', 'text');
createDomElement('button', 'search__button', 'search', search);

const country = createDomElement('div', 'country', '', table);
createDomElement('span', 'country__flag', '', country);
createDomElement('p', 'country__name', 'Belarus', country);

const indicators = createDomElement('div', 'indicators', '', table);
const caseInfo = createDomElement('div', 'case', '', indicators);
createDomElement('div', 'case__title', 'case', caseInfo);
createDomElement('div', 'case__count', '200 000', caseInfo);

const deatInfo = createDomElement('div', 'deat', '', indicators);
createDomElement('div', 'deat__title', 'deat', deatInfo);
createDomElement('div', 'deat__count', '200 000', deatInfo);

const recovereInfo = createDomElement('div', 'recover', '', indicators);
createDomElement('div', 'recover__title', 'recover', recovereInfo);
createDomElement('div', 'recover__count', '200 000', recovereInfo);

const toggle = createDomElement('div', 'toggles', '', table);
const togglesMap = createDomElement('button', 'toggles__map', 'map', toggle);
const togglesGraph = createDomElement('button', 'toggles__graph', 'graph', toggle);

export {
  togglesMap, togglesGraph,
};
