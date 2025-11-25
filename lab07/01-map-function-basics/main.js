'use strict';

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'cherry', 'date', 'grape'];

console.log('Original arrays:');
console.log('numbers:', numbers);
console.log('fruits:', fruits);
console.log('');

// TODO 1: Use map() to create a new array where each number is doubled.
// Store the result in a variable called `doubled` and print it to the console.
console.log('1. Create an array of doubled numbers:');
// Your code here
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8 ,10]


// TODO 2: Use map() to create a new array where each number is squared (multiplied by itself).
// Store the result in a variable called `squared` and print it to the console.
console.log('2. Create an array of squared numbers:');
// Your code here
const squared = numbers.map(num => num*num);
console.log(squared);


// TODO 3: Use map() to create a new array where each fruit name has "🍎 " prepended to it.
// Store the result in a variable called `fruitsWithEmoji` and print it to the console.
console.log('3. Create an array of fruits with emoji prefix:');
// Your code here
const fruitsWithEmoji = fruits.map(f => "🍎" + f.toUpperCase()+ "!");
console.log(fruitsWithEmoji);
