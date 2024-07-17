const container = document.querySelector(".container");

/*
// create 16x16 grid of square divs
let N = 16
for (let i = 0; i < N; i++) {
    //create div row container
    let row = document.createElement("div");
    row.classList.add(`row${i}`);
    container.appendChild(row);
    //16x loop to create 16 divs in row container
    for (let j = 0; j < N; j++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    };
};
*/


//create NxN grid of square divs
let N = 16;
let loopLimit = N*N;
for (let i = 0; i < loopLimit; i++) {
    let squareWidth = `${(100/N)}vw`;
    console.log(squareWidth);
    let square = document.createElement("div");
    square.classList.add("square");
    square.width = squareWidth
    container.appendChild(square);
};
