'use strict';

// Practice basic for/while loops and conditionals.
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);

  // TODO: Print the name of the first user to the console.
  console.log('1. Print the name of the first user to the console.');
  console.log(users[0].name);

  
  // TODO: Print the email of the last user to the console.
  console.log('2. Print the email of the last user to the console.');
  console.log(users[users.length - 1].email);

  // TODO: Print the city of the user with the id of 3 to the console.
  console.log('3. Print the city of the third user to the console.');
  console.log(users[2].address.city);


  // TODO: Print all of the first names of the users to the console.
  console.log('4. Print all of the first names of the users to the console.');
  for (const user of users) {
      console.log(user.username);
  }
  

  // TODO: Print all of the first names of the users to the console.
  console.log('5. Print the first name and email of each user to the .container.');

  //target the container you want to modify:
const container = document.querySelector("#container");

//visit each object in the list
for (const user of users) {
  container.innerHTML += `<p>✉️ ${user.name} - ${user.email}</p>`;

}
}
getUsers();
