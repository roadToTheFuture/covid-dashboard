import { DOM_INDIVIDUAL_ELEMENT } from '@js/constants/constants.js';
import numberWithCommas from '@js/utils/numberWithCommas.js';

export default function updateCases(quantity) {
  const element = DOM_INDIVIDUAL_ELEMENT.table.caseCount;
  element.textContent = numberWithCommas(quantity);
}