import { COVID } from '@js/constants/urls.js';
import { getData } from '@js/events/request/getSummaryData.js';
import { Grid } from 'ag-grid-community';

async function tableRender() {
  const elem = await getData(COVID.countries);
  const row = [];

  elem.forEach((key) => {
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

  const gridOptions = {
    columnDefs: head,
    rowData: row,
  };

  const eGridDiv = document.querySelector('.table__indicators');
  eGridDiv.classList.add('ag-theme-alpine');

  new Grid(eGridDiv, gridOptions);
}
tableRender();
