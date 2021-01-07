import Chart from 'chart.js';
import { DOM_INDIVIDUAL_ELEMENT } from '@js/constants/constants.js';
import numberWithCommas from '@js/utils/numberWithCommas.js';

export default function renderIndividualGraph(arr, country, graphType) {
  const graph = DOM_INDIVIDUAL_ELEMENT.window.canvas;
  const myChart = new Chart(graph, {
    type: graphType,
    data: {
      labels: ['Case', 'Deaths', 'Recovered'],
      datasets: [{
        label: country,
        data: arr,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
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
      tooltips: {
        callbacks: {
          label(value, data) {
            return ` ${data.datasets[0].label} : ${numberWithCommas(value.yLabel)}`;
          },
          title(value, data) {
            const infoIndex = value[0].index;
            return data.labels[infoIndex];
          },
        },
      },
    },
  });
  return myChart;
}
