const container = document.querySelector(".container");

let gridNumber = 16

function createGrid () {
    for (let i = 0; i < gridNumber; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < gridNumber; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            if (i === 0) {
                gridSquare.classList.add("topRow");
            };
            if (j === 0) {
                gridSquare.classList.add("leftColumn");
            };
            row.appendChild(gridSquare);
        };
    };
};

createGrid();

function addDrawEventListener () {
    let squares = document.querySelectorAll(".gridSquare");
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
            console.log(+square.style.opacity);
            if (+square.style.opacity === 1) {
                square.style.backgroundColor = randomColor();
            } else if (+square.style.opacity < 1) {
                square.style.backgroundColor = randomColor();
                square.style.opacity = (+square.style.opacity + .1).toString();
            };
            console.log(square.style.opacity);
        };
        square.addEventListener("mouseover", draw);
    });
};

addDrawEventListener();

let newGrid = document.querySelector("#newGrid");

newGrid.addEventListener("click", function() {
    function getGridNumber () {
        gridNumber = +prompt("Number of squares per side of new grid?");
        if (gridNumber > 100 || !gridNumber) {
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