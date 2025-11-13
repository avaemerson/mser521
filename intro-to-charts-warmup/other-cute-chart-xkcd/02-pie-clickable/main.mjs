import chartClickable from './chart-clickable.js';

// Store data in simple variables for easy access
const labels = ['Apple', 'Mango', 'Blueberries', 'Kiwi', 'Banana'];
const data = [500, 200, 80, 90, 100];
const colors = [
  '#FF6B6B', // Coral red (Apple)
  '#FFB366', // Soft orange (Mango)
  '#45B7D1', // Sky blue (Blueberries)
  '#96CEB4', // Mint green (Kiwi)
  '#FFEAA7', // Soft yellow (Banana)
];
const total = data.reduce((sum, val) => sum + val, 0);

// Create the pie chart
const svgPie = document.querySelector('.pie-chart');
const pieChart = new chartXkcd.Pie(svgPie, {
  title: 'Favorite Fruits',
  data: {
    labels: labels,
    datasets: [{ data: data }],
  },
  options: {
    innerRadius: 0.6,
    legendPosition: chartXkcd.config.positionType.upRight,
    dataColors: colors,
  },
});

// Attach click event to the chart
chartClickable(pieChart, showDetails);

// Show details of the clicked slice:
function showDetails(index, chart) {
  const label = labels[index]; // get the fruit name
  const color = colors[index]; // get the color
  const value = data[index]; // get the value
  const percentage = ((value / total) * 100).toFixed(1); // calculate percentage

  // Update details panel
  const detailsElement = document.querySelector('#pie-details');
  if (detailsElement) {
    detailsElement.style.backgroundColor = color;
    detailsElement.innerHTML = `
      <h2>${label}</h2>
      <p><strong>Value:</strong> ${value}</p>
      <p><strong>Percentage:</strong> ${percentage}%</p>
    `;
  }
}
