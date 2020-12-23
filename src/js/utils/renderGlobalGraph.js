import Chart from 'chart.js';
import { DOM_GLOBAL_ELEMENT } from '@js/constants/constants.js';

export default function renderGlobalGraph(summ, graphType, name) {
  const myChart = new Chart(DOM_GLOBAL_ELEMENT.graph, {
    type: graphType,
    data: {
      labels: ['', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: name,
        data: summ,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}
