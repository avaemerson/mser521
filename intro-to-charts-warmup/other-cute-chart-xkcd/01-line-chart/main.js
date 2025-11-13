// Store data in simple variables for easy access
const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const planData = [30, 70, 200, 300, 500, 800, 1500, 2900, 5000, 8000];
const realityData = [0, 1, 30, 70, 80, 100, 50, 80, 40, 150];

// Create the line chart
const svg = document.querySelector('.line-chart');
const lineChart = new chartXkcd.Line(svg, {
  title: 'Monthly income of an indie developer',
  xLabel: 'Month',
  yLabel: '$ Dollars',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Plan',
        data: planData,
      },
      {
        label: 'Reality',
        data: realityData,
      },
    ],
  },
  options: {
    yTickCount: 3,
    legendPosition: chartXkcd.config.positionType.upLeft,
  },
});
