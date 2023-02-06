let container = document.getElementsByClassName("container")[0];


for (let index = 0; index < 16; index++) {
    let row = document.createElement("div");
    row.className = `row-${index} row`;
    container.appendChild(row);

    for (let index = 0; index < 16; index++) {
        let column = document.createElement("div");
        column.className = `column-${index} column`;
        column.addEventListener("mouseover", function(){column.classList.add("yellow")})
        row.appendChild(column);
    }
}
