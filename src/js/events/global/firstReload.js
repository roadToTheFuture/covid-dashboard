import generateCases from '@js/events/global/click/cases.js';
import renderGlobalGraph from '@js/utils/renderGlobalGraph.js';
import { DOM_GLOBAL_ELEMENT } from '@js/constants/constants.js';

generateCases();
renderGlobalGraph();

const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

const button = DOM_GLOBAL_ELEMENT.table.button.date;

button.textContent = `${day} ${month} ${year}`;
