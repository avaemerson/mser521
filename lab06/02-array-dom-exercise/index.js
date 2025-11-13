const imagePathList = [
  'images/poppies.jpg',
  'images/dogwoods.jpg',
  'images/blossom.jpg',
  'images/field3.jpg',
  'images/field4.jpg',
  'images/branch.jpg',
  'images/red.jpg',
  'images/purple2.jpg',
  'images/field1.jpg',
  'images/purple.jpg',
  'images/jar.jpg',
  'images/green.jpg',
  'images/green1.jpg',
  'images/purple1.jpg',
  'images/magnolias.jpg',
  'images/daisy1.jpg',
];

for (const path of imagePathList) {
  console.log(path);
  const container = document.querySelector(".cards");
  const template = `<img src="${path}">`;
  container.innerHTML += template;
}

// TODO: Select the container element with class "cards"
// const cardsContainer = document.querySelector('.cards');

// TODO: Loop through the imagePathList array using a for...of loop
// TODO: For each image path, create an <img> element with src and alt attributes
// TODO: Add each image to the container using innerHTML +=
