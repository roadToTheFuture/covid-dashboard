import { DOM_GLOBAL_ELEMENT } from '@js/constants/constants.js';

const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

const button = DOM_GLOBAL_ELEMENT.table.button.date;

button.textContent = `${day} ${month} ${year}`;
