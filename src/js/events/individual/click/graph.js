import { DOM_INDIVIDUAL_ELEMENT } from '@js/constants/constants.js';

const button = DOM_INDIVIDUAL_ELEMENT.table.toggle.graph;
const map = DOM_INDIVIDUAL_ELEMENT.window.winMap;
const graph = DOM_INDIVIDUAL_ELEMENT.window.winGrpah;

function activateGraph() {
  map.classList.remove('active');
  graph.classList.add('active');
}

button.addEventListener('click', activateGraph);