import { DOM_INDIVIDUAL_ELEMENT } from '@js/constants/constants.js';

const button = DOM_INDIVIDUAL_ELEMENT.table.toggle.map;
const map = DOM_INDIVIDUAL_ELEMENT.window.winMap;
const graph = DOM_INDIVIDUAL_ELEMENT.window.winGrpah;

function activateMap() {
  graph.classList.remove('active');
  map.classList.add('active');
}

button.addEventListener('click', activateMap);
