import { Grid } from 'ag-grid-community';

export default function render(head, row) {
  const gridOptions = {
    columnDefs: head,
    rowData: row,
  };

  const eGridDiv = document.querySelector('.table__indicators');
  eGridDiv.classList.add('ag-theme-alpine');

  new Grid(eGridDiv, gridOptions);
}
