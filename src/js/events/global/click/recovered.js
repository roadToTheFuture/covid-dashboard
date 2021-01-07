import { COVID } from '@js/constants/urls.js';
import { getData } from '@js/events/request/getSummaryData.js';
import {
  recovered, indicators, title, counter,
} from '@js/elements/main/global/table.js';
import render from '@js/utils/renderTable.js';
import numberWithCommas from '@js/utils/numberWithCommas.js';
import renderGlobalGraph from '@js/utils/renderGlobalGraph.js';
import sumOfMoths from '@js/utils/sumOfMoths.js';

async function generateRecovered() {
  indicators.innerHTML = '';
  const countryInfo = await getData(COVID.countries);
  const worldInfo = await getData(COVID.world);
  const graphInfo = await getData(COVID.graphGlobal);
  const allMonth = await sumOfMoths(graphInfo, 'recovered');
  const row = [];
  title.textContent = 'Global Recovered';
  counter.textContent = `${numberWithCommas(worldInfo.recovered)}`;

  countryInfo.forEach((key) => {
    row.push({ country: key.country, confirmed: key.recovered, today: key.todayRecovered });
  });

  const head = [
    {
      headerName: 'Country', field: 'country', sortable: true, filter: true, flex: 1, editable: false,
    },
    {
      headerName: 'Recovered', field: 'confirmed', sortable: true, filter: true, width: 120, editable: false,
    },
    {
      headerName: 'Today', field: 'today', sortable: true, filter: true, flex: 1, editable: false,
    },
  ];

  render(head, row);
  renderGlobalGraph(allMonth, 'line', 'Global Recovered 2020');
}

recovered.addEventListener('click', generateRecovered);
