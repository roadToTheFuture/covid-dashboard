import { DOM_INDIVIDUAL_ELEMENT } from '@js/constants/constants.js';
import numberWithCommas from '@js/utils/numberWithCommas.js';

export default function updateRecovered(recovered) {
  const element = DOM_INDIVIDUAL_ELEMENT.table.recoverCount;
  element.textContent = numberWithCommas(recovered);
}