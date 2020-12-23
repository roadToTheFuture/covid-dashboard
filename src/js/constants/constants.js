import {
  info, title, counter, indicators, death, recovered, calculate, cases, date,
} from '@js/elements/main/global/table.js';
import {
  search, input, button, country, flag, name, caseCount, deatCount, recoverCount, map, graph,
} from '@js/elements/main/individual/table.js';
import { globalCanvas } from '@js/elements/main/global/graph.js';
import { winGrpah, winMap } from '@js/elements/main/individual/window.js';

const DOM_GLOBAL_ELEMENT = {
  table: {
    info: { info, title, counter },
    table: indicators,
    button: {
      death, recovered, calculate, cases, date,
    },
  },
  graph: globalCanvas,
};

const DOM_INDIVIDUAL_ELEMENT = {
  table: {
    search: { search, input, button },
    country: { country, flag, name },
    case: caseCount,
    deat: deatCount,
    recover: recoverCount,
    toggle: { map, graph },
  },
  window: {
    graph: winGrpah,
    map: winMap,
  },
};

const SWIPER_NAMES = {
  first: 'global',
  second: 'country',
};

export {
  DOM_GLOBAL_ELEMENT,
  DOM_INDIVIDUAL_ELEMENT,
  SWIPER_NAMES,
};
