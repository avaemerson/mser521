// Practice basic for/while loops and conditionals.

const fruits = [
  { name: 'apple', color: '#d1495b', emoji: '🍎', count: 12 },
  { name: 'banana', color: '#f1c40f', emoji: '🍌', count: 8 },
  { name: 'cherry', color: '#c0392b', emoji: '🍒', count: 20 },
  { name: 'date', color: '#8e5a33', emoji: '🌴', count: 6 },
  { name: 'grape', color: '#6c5ce7', emoji: '🍇', count: 18 },
  { name: 'kiwi', color: '#27ae60', emoji: '🥝', count: 9 },
  { name: 'lemon', color: '#f9e79f', emoji: '🍋', count: 14 },
  { name: 'mango', color: '#f39c12', emoji: '🥭', count: 7 },
  { name: 'orange', color: '#e67e22', emoji: '🍊', count: 11 },
];

// 1. Print the first number in the list to the console.
console.log('1. Print the first fruit name to the console.');
console.log(fruits[0].name);

// 2. Print the second number in the list to the console.
console.log('2. Print the second fruit emoji to the console.');
console.log(fruits[1].emoji);

// 3. Print the third number in the list to the console.
console.log('3. Print the third fruit count to the console.');
console.log(fruits[2].count);

// 4. Print the last number in the list to the console.
console.log('4. Print the last fruit count to the console.');
const lastFruit = fruits[fruits.length - 1];
console.log(lastFruit.count);

// 5. Using a "for...of loop", print each number to the console.
console.log('5. Using a "for...of loop", print each fruit color swatch and name.');
for (const fruit of fruits) {
  console.log(fruit.color, fruit.name);
}

// 6. Using a "for...of loop", display the name, emoji and count of each fruit
//    in a div tag within the element that has an id of "container".`

//target the container you want to modify:
const container = document.querySelector("#container");

//visit each fruit object in the list
for (const fruit of fruits) {
  container.innerHTML += `<p>${fruit.count}  ${fruit.emoji}  ${fruit.name}</p>`;
}
