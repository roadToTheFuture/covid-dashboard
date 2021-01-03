import { COVID } from '@js/constants/urls.js';
import { getData } from '@js/events/request/getSummaryData.js';
import {
  cases, indicators, title, counter,
} from '@js/elements/main/global/table.js';
import render from '@js/utils/renderTable.js';
import numberWithCommas from '@js/utils/numberWithCommas.js';
import renderGlobalGraph from '@js/utils/renderGlobalGraph.js';
import sumOfMoths from '@js/utils/sumOfMoths.js';

export default async function generateCases() {
  indicators.innerHTML = '';
  const countryInfo = await getData(COVID.countries);
  const worldInfo = await getData(COVID.world);
  const graphInfo = await getData(COVID.graphGlobal);
  const allMonth = await sumOfMoths(graphInfo, 'cases');
  const row = [];

  title.textContent = 'Global Cases';
  counter.textContent = `${numberWithCommas(worldInfo.cases)}`;
  countryInfo.forEach((key) => {
    row.push({ country: key.country, confirmed: key.cases, today: key.todayCases });
  });

  const head = [
    {
      headerName: 'Country', field: 'country', sortable: true, filter: true, flex: 1, editable: false,
    },
    {
      headerName: 'Cases', field: 'confirmed', sortable: true, filter: true, flex: 1, editable: false,
    },
    {
      headerName: 'Today', field: 'today', sortable: true, filter: true, flex: 1, editable: false,
    },
  ];

  render(head, row);
  renderGlobalGraph(allMonth, 'line', 'Global Cases');
}

cases.addEventListener('click', generateCases);
