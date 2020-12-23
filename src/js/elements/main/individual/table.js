import { createDomElement } from '@js/utils/createDomElement.js';
import { individual } from '@js/elements/main/slider/slider.js';

const table = createDomElement('div', 'table', '', individual);

const search = createDomElement('div', 'search', '', table);
const input = createDomElement('input', 'search__input', '', search, 'type', 'text');
const button = createDomElement('button', 'search__button', 'search', search);

const country = createDomElement('div', 'country', '', table);
const flag = createDomElement('div', 'country__flag', '', country);
const img = createDomElement('img', 'flag_img', '', flag, 'alt', 'Флаг');
const name = createDomElement('p', 'country__name', 'Belarus', country);

const indicators = createDomElement('div', 'indicators', '', table);
const caseInfo = createDomElement('div', 'case', '', indicators);
createDomElement('div', 'case__title', 'case', caseInfo);
const caseCount = createDomElement('div', 'case__count', '200 000', caseInfo);

const deathInfo = createDomElement('div', 'deat', '', indicators);
createDomElement('div', 'deat__title', 'deat', deathInfo);
const deathCount = createDomElement('div', 'deat__count', '200 000', deathInfo);

const recovereInfo = createDomElement('div', 'recover', '', indicators);
createDomElement('div', 'recover__title', 'recover', recovereInfo);
const recoverCount = createDomElement('div', 'recover__count', '200 000', recovereInfo);

const toggle = createDomElement('div', 'toggles', '', table);
const map = createDomElement('button', 'toggles__map', 'map', toggle);
const graph = createDomElement('button', 'toggles__graph', 'graph', toggle);

export {
  search, input, button,
  country, img, name,
  caseCount, deathCount, recoverCount,
  map, graph,
};
