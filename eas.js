let container = document.getElementsByClassName("container")[0];


for (let index = 0; index < 5; index++) {
    let row = document.createElement("div");
    row.className = `row-${index} row`;
    container.appendChild(row)

    for (let index = 0; index <5; index++) {
        let column = document.createElement("div");
        column.className = `column-${index} column`
        row.appendChild(column)
    }
}
