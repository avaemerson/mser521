'use strict';

const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 21, grade: 92 },
  { name: 'Charlie', age: 19, grade: 78 },
  { name: 'Diana', age: 22, grade: 95 },
];

console.log('Original students array:');
console.log(students);
console.log('');

// TODO 1: Use map() to create an array containing only the names of all students.
// Store the result in a variable called `names` and print it to the console.
console.log('1. Extract all student names:');
// Your code here
const names = students.map(row => row.name);
console.log(names);


// TODO 2: Use map() to create an array containing only the grades of all students.
// Store the result in a variable called `grades` and print it to the console.
console.log('2. Extract all student grades:');
// Your code here
const grades = students.map(grade => grade.grade);
console.log(grades);


// TODO 3: Use map() to create an array of strings in the format "Name: [name], Grade: [grade]" for each student.
// Store the result in a variable called `studentInfo` and print it to the console.
console.log('3. Create formatted student info strings:');
// Your code here
const studentInfo = students.map(student => "Name: " + student.name + ", " + "Grade: " + student.grade);
console.log(studentInfo);

const studentsAngie = students.map(student => `Name: ${student.name}, Grade: ${student.grade}`);
console.log(studentsAngie);

// TODO 4: Use map() to create an array of objects with only `name` and `grade` properties (excluding `age`).
// Store the result in a variable called `nameAndGrade` and print it to the console.
console.log('4. Create array of objects with only name and grade:');
// Your code here
//const nameAndGrade = students.map(student => );
//console.log(nameAndGrade);

