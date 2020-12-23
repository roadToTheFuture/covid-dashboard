import { DOM_INDIVIDUAL_ELEMENT } from '@js/constants/constants.js';

export default function countryNameFlag(name, src) {
  const element = DOM_INDIVIDUAL_ELEMENT.table.country.name;
  const flag = DOM_INDIVIDUAL_ELEMENT.table.country.img;
  element.textContent = name;
  flag.setAttribute('src', src);
}