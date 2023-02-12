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
        column.addEventListener("mouseover", function(){column.classList.add("color")})
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
    //Creates a new div with class of grid, this matches the intial grid settings
    let grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    
    for (let index = 0; index < sliderValue; index++) {
        let row = document.createElement("div");
        row.className = `row-${index} row`;
        grid.appendChild(row);

        for (let index = 0; index < sliderValue; index++) {
            let column = document.createElement("div");
            column.className = `column-${index} column`;
            column.addEventListener("mouseover", function(){column.classList.add("color")})
            row.appendChild(column);
        }
    }
    return grid;
}