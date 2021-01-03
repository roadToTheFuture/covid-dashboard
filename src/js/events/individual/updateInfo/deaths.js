import { DOM_INDIVIDUAL_ELEMENT } from '@js/constants/constants.js';
import numberWithCommas from '@js/utils/numberWithCommas.js';

export default function updateDeaths(deaths) {
  const element = DOM_INDIVIDUAL_ELEMENT.table.deathCount;
  element.textContent = numberWithCommas(deaths);
}
