// variables at the top:
let snowDays1;
let snowDays2;
let snowDays3;
let months;

// define the function to get the chart data:
async function getChartData() {
  const sheetName = 'Snow Days';
  const response = await fetch(
    `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
  );
  const data = await response.json();
  return data;
}

async function getChartData() {
  const sheetName = 'AvaSnowdaze';
  const response = await fetch(
    `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
  );
  const data = await response.json();
  return data;
}

// define the funciton to create the chart:
async function createChart() {
  const serverData = await getChartData();

  // create the two lists that we need for the chart:
  snowDays1 = serverData.map(row => row['Ava Songs Listened 2025']);
  snowDays2 = serverData.map(row => row['Phoebe Songs Listened 2025']);
  snowDays3 = serverData.map(row => row['Gill Songs Listened 2025']);
  months = serverData.map(row => row['Month']);

  const options = {
    chart: {
      type: 'line',
      events: {
        dataPointSelection: getDetails,
      },
    },
    colors: ['#1DB954', 'black', '#808080'], // series 1 and series 2 colors
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    series: [
      { name: 'Ava Songs Listened 2025', data: snowDays1 },
      { name: 'Phoebe Songs Listened 2025', data: snowDays2 },
      { name: 'Gill Songs Listened 2025', data: snowDays3 },
    ],
    xaxis: { categories: months },
  };

  document.querySelector('#chart').innerHTML = '';
  const chart = new ApexCharts(document.querySelector('#chart'), options);
  chart.render();
}

// Much simpler function using our stored data:
function getDetails(event, chartContext, config) {
  const dataIndex = config.dataPointIndex; // get the index of the clicked point

  // target the details panel:
  const detailsElement = document.querySelector('#details');
  // update the details panel:
  detailsElement.innerHTML = `
          <h2>Details for ${months[dataIndex]}</h2>
          <p>Month: ${months[dataIndex]}</p>
          <p>2023-2024 Snow Days: ${snowDays1[dataIndex]}</p>
          <p>2024-2025 Snow Days: ${snowDays2[dataIndex]}</p>
          <p>2024-2025 Snow Days: ${snowDays3[dataIndex]}</p>
      `;
}

// run the function:
createChart();
