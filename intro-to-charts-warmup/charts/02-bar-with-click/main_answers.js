// Store data in simple variables for easy access
const chartData = [4, 7, 3, 5];
const categories = ['Jan', 'Feb', 'Mar', 'Apr'];

// chart options:
const options = {
  chart: {
    type: 'bar',
    events: {
      dataPointSelection: getDetails,
    },
  },
  series: [{ name: 'Count', data: chartData }],
  xaxis: { categories: categories },
};

// Much simpler function using our stored data:
function getDetails(event, chartContext, config) {
  const dataIndex = config.dataPointIndex; // get the index of the clicked point
  console.log(dataIndex);

  const dataValue = chartData[dataIndex]; // get the value of the clicked point
  const category = categories[dataIndex]; // get the category of the clicked point

  // target the details panel:
  const detailsElement = document.querySelector('#details');
  // update the details panel:
  detailsElement.innerHTML = `
        <h2>Details for ${category}</h2>
        <p>Category: ${category}</p>
        <p>Value: ${dataValue}</p>
    `;
}

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
