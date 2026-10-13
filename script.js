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
  console.log("is this code working here ?");

  boxes.forEach((box) => {
    console.log("is this code working here ?");
    box.addEventListener("mouseenter", (e) => {
      console.log(`this is the ${e}`);
      e.target.classList.add("active");
    });
  });
}

draw();

resizeBtn.addEventListener("click", (e) => {
  const size = Number(prompt("Please enter how many boxes do you want ? :"));

  container.innerHTML = "";

  createGrid(size);
  draw();
});
