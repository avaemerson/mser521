function makeRed () {
    console.log("turn first div red");
    let section1El = document.querySelector("#section1");
    section1El.style.backgroundColor = "red";
}

function makeBlue () {
    console.log("turn 2nd div blue");
    let section2El = document.querySelector("#section2");
    section2El.style.backgroundColor = "blue";
}

function makePink () {
    console.log("turn 3rd div pink");
    let section3El = document.querySelector("#section3");
    section3El.style.backgroundColor = "pink";
}

function makeOrange () {
    console.log("turn 4th div orange");
    let section4El = document.querySelector("#section4");
    section4El.style.backgroundColor = "orange";
}

function changeBackground(selector, color){
    let el = document.querySelector(selector);
    el.style.backgroundColor = color;
}

function reset() {
    let section1El = document.querySelector("#section1");
    section1El.style.backgroundColor = "white";
    let section2El = document.querySelector("#section2");
    section2El.style.backgroundColor = "white";
    let section3El = document.querySelector("#section3");
    section3El.style.backgroundColor = "white";
    let section4El = document.querySelector("#section4");
    section4El.style.backgroundColor = "white";
}
