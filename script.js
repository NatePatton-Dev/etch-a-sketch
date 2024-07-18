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
            function randomColor () {
                let color = "";
                for (let i = 0; i < 3; i++) {
                    let num = Math.floor(Math.random()*256).toString();
                    if (i < 2) {
                        color += num + ",";
                    } else {
                        color += num;
                    };
                };
                return "rgb(" + color + ")";
            };
            // increase opacity
            let opacity = square.style.opacity;
            console.log(+opacity);
            if (+opacity < .05) {
                square.style.backgroundColor = randomColor();
                opacity = (+opacity + .1).toString();
            } else if (+opacity < 1) {
                opacity = (+opacity + .1).toString();
            };
            console.log(+opacity);
        };
        square.addEventListener("mouseover", draw);
    });
};

addDrawEventListener();

let newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", function() {
    function getGridNumber () {
        gridNumber = +prompt("Number of squares per side of new grid?");
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

//increase opacity not working yet

//how to make grid flex as window size shrinks horizontally

//why did if `(gridNumber>100 || !gridNumber)` not work, but splitting them did?