import 'ag-grid-enterprise';
import { Grid } from 'ag-grid-community';
import { DOM_GLOBAL_ELEMENT } from '@js/constants/constants.js';

const columnDefs = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' },
];

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
];

const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData
};

const eGridDiv = DOM_GLOBAL_ELEMENT.table.table;

new Grid(eGridDiv, gridOptions);