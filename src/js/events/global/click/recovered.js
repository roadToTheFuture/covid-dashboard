import { COVID } from '@js/constants/urls.js';
import { getData } from '@js/events/request/getSummaryData.js';
import { recovered, indicators, title, counter } from '@js/elements/main/global/table.js';
import render from '@js/utils/renderTable.js';

async function generateRecovered() {
  indicators.innerHTML = '';
  const countryInfo = await getData(COVID.countries);
  const worldInfo = await getData(COVID.world);
  const row = [];
  title.textContent = 'Global Recovered';
  counter.textContent = `${worldInfo.recovered}`;

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
}

recovered.addEventListener('click', generateRecovered);