import { COVID } from '@js/constants/urls.js';
import { getData } from '@js/events/request/getSummaryData.js';
import { death, indicators, title, counter } from '@js/elements/main/global/table.js';
import render from '@js/utils/renderTable.js';

async function generateDeaths() {
  indicators.innerHTML = '';
  const countryInfo = await getData(COVID.countries);
  const worldInfo = await getData(COVID.world);
  const row = [];
  title.textContent = 'Global Deaths';
  counter.textContent = `${worldInfo.deaths}`;

  countryInfo.forEach((key) => {
    row.push({ country: key.country, confirmed: key.deaths, today: key.todayDeaths });
  });

  const head = [
    {
      headerName: 'Country', field: 'country', sortable: true, filter: true, flex: 1, editable: false,
    },
    {
      headerName: 'Deaths', field: 'confirmed', sortable: true, filter: true, flex: 1, editable: false,
    },
    {
      headerName: 'Today', field: 'today', sortable: true, filter: true, flex: 1, editable: false,
    },
  ];

  render(head, row);
}

death.addEventListener('click', generateDeaths);