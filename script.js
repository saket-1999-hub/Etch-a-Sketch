"use strict";

const container = document.querySelector(".container");
let boxes;

function createGrid(number) {
  const containerSize = 800;
  const boxWidth = `${Math.floor(containerSize / number)}`;
  const boxHeight = `${Math.floor(containerSize / number)}`;

  container.style.width = `${containerSize}px`;

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
  boxes = document.querySelectorAll(".items");
}

createGrid(16);

// const boxes = document.querySelectorAll(".items");
const resizeBtn = document.querySelector(".btn-grid-size");

function draw() {
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
      e.target.classList.add("active");
    });
  });
}

draw();

resizeBtn.addEventListener("click", (e) => {
  const size = Number(prompt("Please enter grid size (upto 100) :"));

  if (size > 0 && size <= 100) {
    container.innerHTML = "";

    createGrid(size);
    draw();
  }
});
