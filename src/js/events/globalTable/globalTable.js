import { BASE_URL } from '@js/constants/urls.js';
import { getData } from '@js/events/request/getSummaryData.js';
import { Grid } from 'ag-grid-community';

const elem = getData(BASE_URL);

elem.then((data) => {
  const tableInfo = [];
  data.Countries.forEach((key) => {
    tableInfo.push({ country: key.Country, confirmed: key.TotalConfirmed });
  });

  tableRender(tableInfo);
});

function tableRender(row) {
  const head = [
    {
      headerName: 'Country', field: 'country', sortable: true, filter: true, flex: 1, editable: false,
    },
    {
      headerName: 'Cases', field: 'confirmed', sortable: true, filter: true, flex: 1, editable: false,
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
