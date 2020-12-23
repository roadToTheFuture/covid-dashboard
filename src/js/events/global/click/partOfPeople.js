import { COVID } from '@js/constants/urls.js';
import { getData } from '@js/events/request/getSummaryData.js';
import { calculate, indicators, title, counter } from '@js/elements/main/global/table.js';
import render from '@js/utils/renderTable.js';
import renderGlobalGraph from '@js/utils/renderGlobalGraph.js';
import sumOfMoths from '@js/utils/sumOfMoths.js';

async function generatePartOfPeople() {
  indicators.innerHTML = '';
  const countryInfo = await getData(COVID.countries);
  const worldInfo = await getData(COVID.world);
  const graphInfo = await getData(COVID.graphGlobal);
  const allMonth = await sumOfMoths(graphInfo, 'perHundred');
  const row = [];
  title.textContent = 'Global Cases per 100th';
  counter.textContent = `${worldInfo.casesPerOneMillion / 10}`;

  countryInfo.forEach((key) => {
    const casesPerHundredThousand = key.casesPerOneMillion / 10;
    row.push({ country: key.country, confirmed: casesPerHundredThousand, today: key.todayCases });
  });

  const head = [
    {
      headerName: 'Country', field: 'country', sortable: true, filter: true, flex: 1, editable: false,
    },
    {
      headerName: 'Per 100th', field: 'confirmed', sortable: true, filter: true, width: 120, editable: false,
    },
    {
      headerName: 'Today', field: 'today', sortable: true, filter: true, flex: 1, editable: false,
    },
  ];

  render(head, row);
  renderGlobalGraph(allMonth, 'doughnut', 'Per Hundred Thousand');
}

calculate.addEventListener('click', generatePartOfPeople);