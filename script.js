"use strict";

function createGrid(number) {
  const boxWidth = 40;
  const boxHeight = 40;
  const container = document.querySelector(".container");
  container.style.width = `${number * boxWidth}px`;

  for (let i = 0; i < number; i++) {
    let row = document.createElement("div");
    row.classList.add("items", "box");
    row.style.width = `${boxWidth}px`;
    row.style.height = `${boxHeight}px`;
    container.appendChild(row);

    for (let i = 0; i < number - 1; i++) {
      let column = document.createElement("div");
      column.classList.add("items", "box");
      column.style.width = `${boxWidth}px`;
      column.style.height = `${boxHeight}px`;
      container.appendChild(column);
    }
  }
}

createGrid(16);
