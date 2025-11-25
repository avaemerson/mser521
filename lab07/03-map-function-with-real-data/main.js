'use strict';

// Practice using map() with data fetched from an API.
async function getSnowDays() {
  const sheetName = 'Snow Days';
  const response = await fetch(
    `https://script.google.com/macros/s/AKfycbzcOnqzvg3ajtKVALrY_bvc5qo6bvYhwVYgPM7KNKU-3t2mG2YJRrFl4rwDmPxx0ZI78g/exec?sheet=${sheetName}`
  );
  const snowDays = await response.json();
  console.log('serverData: ', snowDays);
  console.log('');

  // TODO 1: Use map() to create an array containing only the months.
  // Store the result in a variable called `months` and print it to the console.
  console.log('1. Extract all months:');
  // Your code here
  const months = snowDays.map(row => row["Month"]);
  console.log(months);

  // TODO 2: Use map() to create an array containing only the "Snow Days 2023-2024" values.
  // Store the result in a variable called `snowDays2023` and print it to the console.
  console.log('2. Extract all snow days for 2023-2024:');
  // Your code here
  const snowDays2023 = snowDays.map(row => row["Snow Days 2023-2024"]);
  console.log(snowDays2023);

  // TODO 3: Use map() to create an array of objects with only `Month` and `Snow Days 2024-2025` properties.
  // Store the result in a variable called `snowDays2024` and print it to the console.
  console.log('3. Create array of objects with only Month and 2024-2025 snow days:');
  // Your code here

  // TODO 4: Use map() to create an array of strings in the format "[Month]: [count] snow day(s) in 2023-2024" for each month.
  // Store the result in a variable called `formattedSnowDays` and print it to the console.
  console.log('4. Create formatted snow days strings:');
  // Your code here
const formattedSnowDays = snowDays.map(row => `${row["Month"]}: ${row["Snow Days 2023-2024"]} snow day(s) in 2023-2024`);
console.log(formattedSnowDays);

  return snowDays;
}

getSnowDays();
