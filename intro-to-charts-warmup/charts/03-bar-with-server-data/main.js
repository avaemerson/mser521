// variables at the top:
let snowDays1;
let snowDays2;
let months;

// define the function to get the chart data:
async function getChartData() {
  ``;
  const sheetName = 'Snow Days';
  const response = await fetch(
    `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
  );
  const data = await response.json();
  console.log('serverData: ', data);
  return data;
}

// define the funciton to create the chart:
async function createChart() {
  const serverData = await getChartData();

  // create the two lists that we need for the chart:
  snowDays1 = serverData.map(row => row['Snow Days 2023-2024']);
  snowDays2 = serverData.map(row => row['Snow Days 2024-2025']);
  months = serverData.map(row => row['Month']);
  //   console.log('snowDays1: ', snowDays1);
  //   console.log('snowDays2: ', snowDays2);
  //   console.log('months: ', months);

  const options = {
    chart: {
      type: 'bar',
    },
    series: [
      { name: 'Snow Days 2023-2024', data: snowDays1 },
      { name: 'Snow Days 2024-2025', data: snowDays2 },
    ],
    xaxis: { categories: months },
  };
  document.querySelector('#chart').innerHTML = '';
  const chart = new ApexCharts(document.querySelector('#chart'), options);
  chart.render();
}

// run the function:
createChart();
