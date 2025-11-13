const numbers = [3, 8, 12, 5, 19, 21, 4, 10, 7, 16];
const fruits = ['apple', 'banana', 'cherry', 'date', 'grape', 'kiwi', 'lemon', 'mango', 'orange'];

// 1. Print the first number in the list to the console.
console.log('1. Print the first number in the list to the console.');
console.log(numbers[0]);

// 2. Print the second number in the list to the console.
console.log('2. Print the second number in the list to the console.');
console.log(numbers[1]);

// 3. Print the third number in the list to the console.
console.log('3. Print the third number in the list to the console.');
console.log(numbers[2]);

// 4. Print the last number in the list to the console.
console.log('4. Print the last number in the list to the console.');
console.log(numbers[numbers.length - 1]);

// 5. Using a "for...of loop", print each number to the console.
console.log('5. Using a "for...of loop", print each number to the console.');

for (const num of numbers) {
    console.log(num);
}

//print all the fruits!
for (const fruit of fruits) {
    console.log(fruit);
}