const container = document.querySelector(".container");

// create 16x16 grid of square divs
let gridNumber = 16

function createGrid () {
    for (let i = 0; i < gridNumber; i++) {
        //create div row container
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        //16x loop to create 16 divs in row container
        for (let j = 0; j < gridNumber; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        };
    };
};

createGrid();

function addDrawEventListener () {
    let squares = document.querySelectorAll(".column");
    squares.forEach(function (square) {
        function draw() {
            square.classList.remove("column");
            square.classList.add("columnHover");
        };
        square.addEventListener("mouseover", draw);
    });
};

addDrawEventListener();

// squares.forEach(function (square) {
//     function draw() {
//         square.classList.remove("columnHover");
//         square.classList.add("column");
//     }
//     square.addEventListener("mouseout", draw);
// });

let newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", function() {
    function getGridNumber () {
        gridNumber = +prompt("Number of squares per side of new grid?");
        //if more than 100 re-prompt
        if (gridNumber > 100) {
            getGridNumber();
        } else if (!gridNumber) {
            getGridNumber();
        };
    };
    getGridNumber();
    function removeGrid (parent) {
        while (parent.firstChild) {
            parent.lastChild.remove();
        };
    };
    removeGrid(container);
    createGrid();
    addDrawEventListener();
});

// how to fit grid and button to window size?