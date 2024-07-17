const container = document.querySelector(".container");

// create 16x16 grid of square divs
let N = 16
for (let i = 0; i < N; i++) {
    //create div row container
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    //16x loop to create 16 divs in row container
    for (let j = 0; j < N; j++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    };
};

let squares = document.querySelectorAll(".column");

squares.forEach(function (square) {
    function draw() {
        square.classList.remove("column");
        square.classList.add("columnHover");
    }
    square.addEventListener("mouseover", draw);
});

squares.forEach(function (square) {
    function draw() {
        square.classList.remove("columnHover");
        square.classList.add("column");
    }
    square.addEventListener("mouseout", draw);
});

let newGrid = document.querySelector("#newGrid")
newGrid.addEventListener("click", function() {
    let gridNumber = prompt("Number of squares per side of new grid?")
    //if more than 100 re-prompt

});

//adding button made total page height more than window height
//flex shrink doesn't appear to be working