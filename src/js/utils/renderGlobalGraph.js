import Chart from 'chart.js';
import { DOM_GLOBAL_ELEMENT } from '@js/constants/constants.js';
import numberWithCommas from '@js/utils/numberWithCommas.js';

export default function renderGlobalGraph(summ, graphType, name) {
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(DOM_GLOBAL_ELEMENT.graph, {
    type: graphType,
    data: {
      labels: ['', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        data: summ,
        label: name,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
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
            callback(value) { return numberWithCommas(value); },
          },
        }],
      },
      tooltips: {
        callbacks: {
          label(value, data) {
            return ` ${data.datasets[0].label} : ${numberWithCommas(value.yLabel)}`;
          },
        },
      },
    },
  });
}
