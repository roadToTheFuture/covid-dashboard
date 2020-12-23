import { DOM_INDIVIDUAL_ELEMENT } from '@js/constants/constants.js';
import { COVID } from '@js/constants/urls.js';
import { getData } from '@js/events/request/getSummaryData.js';
import countryNameFlag from '@js/events/individual/updateInfo/countryNameFlag.js';
import updateCases from '@js/events/individual/updateInfo/cases.js';
import updateDeaths from '@js/events/individual/updateInfo/deaths.js';
import updateRecovered from '@js/events/individual/updateInfo/recovered.js';
import renderIndividualGraph from '@js/utils/renderIndividualGraph.js';

const searchButton = DOM_INDIVIDUAL_ELEMENT.table.search.button;
const inputElement = DOM_INDIVIDUAL_ELEMENT.table.search.input;

async function getInfo() {
  const inputValue = inputElement.value;
  const countryInfo = await getData(`${COVID.individual + inputValue}?strict=true`);
  const countryName = countryInfo.country;
  const flagSrc = countryInfo.countryInfo.flag;
  const coordinates = [countryInfo.countryInfo.lat, countryInfo.countryInfo.long];
  const casesInfo = countryInfo.cases;
  const deathsInfo = countryInfo.deaths;
  const recoveredInfo = countryInfo.recovered;

  countryNameFlag(countryName, flagSrc);
  updateCases(casesInfo);
  updateDeaths(deathsInfo);
  updateRecovered(recoveredInfo);
  renderIndividualGraph([casesInfo, deathsInfo, recoveredInfo], countryName, 'polarArea');

  inputElement.value = '';
}

searchButton.addEventListener('click', getInfo);
