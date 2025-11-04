// Your code here.

function toggleMenu() {
    //target the button and save in a variable
    const burgerButton = document.querySelector("#menu-toggle");
    console.log(burgerButton);
    burgerButton.classList.toggle("active");

    //target the ul element and save it in a variable
    const nav = document.querySelector("#nav-links");
    console.log(nav);
    nav.classList.toggle("active");
}