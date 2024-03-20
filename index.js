import Chart from 'chart.js';
import _ from 'lodash';
import Color from 'color';

// Function to initialize a line chart
function createLineChart(canvasElementId, data) {
  const ctx = document.getElementById(canvasElementId).getContext('2d');
  const chartColors = data.datasets.map(() => Color(_.sample(['red', 'green', 'blue', 'yellow', 'purple'])).alpha(0.5).string());

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: data.datasets.map((dataset, index) => ({
        label: dataset.label,
        data: dataset.data,
        backgroundColor: chartColors[index],
        borderColor: chartColors[index],
        fill: false,
      })),
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Crimson Canvas Chart'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      }
    }
  });
}

export default createLineChart;
