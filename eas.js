// Gets container element
let container = document.getElementsByClassName("container")[0];

// Gets grid element
let grid = document.getElementsByClassName("grid")[0];

// Gets slider element and shows their values
let slider = document.getElementById("slider");
let output = document.getElementById("value");
let output2 = document.getElementById("value2");
output.innerHTML = slider.value;
output2.innerHTML = slider.value;

// Creates initial grid
// All rows are individually named to allow for seperate columns
// A generic row class is used for styling
for (let index = 0; index < slider.value; index++) {
    let row = document.createElement("div");
    
    row.className = `row-${index} row`;
    grid.appendChild(row);
    
    for (let index = 0; index < slider.value; index++) {
        let column = document.createElement("div");
        // All columns are individually named to allow for seperate event listeners
        // A generic column class is used for styling
        column.className = `column-${index} column`;
        row.appendChild(column);
    }
}

slider.oninput = function() {
    // Updates slider values
    output.innerHTML = slider.value;
    output2.innerHTML = slider.value

    // Replaces current grid with a new grid
    container.replaceChild(gridSize(slider.value), document.getElementsByClassName("grid")[0]);
}

function gridSize(sliderValue) {
    // Creates a new div with class of grid, this matches the intial grid settings
    let grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    
    for (let index = 0; index < sliderValue; index++) {
        let row = document.createElement("div");
        row.className = `row-${index} row`;
        grid.appendChild(row);

        for (let index = 0; index < sliderValue; index++) {
            let column = document.createElement("div");
            column.className = `column-${index} column`;
            row.appendChild(column);
        }
    }
    return grid;
}

function cleanBoard() {
    let nodeList = document.querySelectorAll(".column");
    for (let element of nodeList) {
        element.removeAttribute("style");
    }
}

// Produces a random integer between 0-255 for a RGB value
// 256 is used as Math.floor is inclusive from 0-255
function randomInt() {
    return Math.floor(Math.random()*(256));
}

// Produces a random RGB value in an array
function randomColor() {
    let red = randomInt();
    let green = randomInt();
    let blue = randomInt();
    
    return `${red},${green},${blue}`;
}

// Adds a new event listenter to every column using the Rainbow button
// Mouseover triggers the randomColor function to create a rainbow effect
function applyRainbow() {
    let nodeList = document.querySelectorAll(".column");
    for(let element of nodeList) {
        element.addEventListener("mouseover", function(){
            element.setAttribute("style", `background-color: rgb(${randomColor()})`);
        });
    }
}

// Repeat of previous apply function, applys black color.
function applyBlack() {
    let nodeList = document.querySelectorAll(".column");
    for(let element of nodeList) {
        element.addEventListener("mouseover", function(){
            element.setAttribute("style", "background-color: black");
        });
    }
}

// Repeat of previous apply function, applys white color.
function applyEraser() {
    let nodeList = document.querySelectorAll(".column");
    for(let element of nodeList) {
        element.addEventListener("mouseover", function(){
            element.setAttribute("style", "background-color: white");
        });
    }
}

// Adds event listener to color picker, when the color is picked the
// value is passed to the applyColor function.
function pickColor() {
    let colorInput = document.querySelector("#color");
    colorInput.addEventListener("input", () => {
        let color = colorInput.value;
        applyColor(color);
    });
}


// Repeat of apply function, applys selected color.
function applyColor(color) {
    console.log(`Color: ${color}`);
    let nodeList = document.querySelectorAll(".column");
    for(let element of nodeList) {
        element.addEventListener("mouseover", function(){
            element.setAttribute("style", `background-color: ${color}`);
        });
    }
}