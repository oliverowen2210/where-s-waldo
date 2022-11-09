import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./components/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let waldo = document.getElementById("waldo");
let target = document.getElementById("target");

let waldoWidth = null;
let waldoHeight = null;

let coords = {
  waldo: {
    start: [78, 7],
    end: [81, 12],
    hit: false,
  },
};

function checkHit(x, y) {
  for (let character in coords) {
    if (x >= coords[character].start[0] && x <= coords[character].end[0]) {
      if (y >= coords[character].start[1] && y <= coords[character].end[1]) {
        if (coords[character].hit) return;
        coords[character].hit = true;
        console.log("hit " + character);
      }
    }
  }
}

function update() {
  waldoWidth = waldo.offsetWidth;
  waldoHeight = waldo.offsetHeight;

  target.style.width = `${waldoWidth * 0.04}px`;
  target.style.height = `${waldoWidth * 0.04}px`;
}

function placeTarget(x, y) {
  let offSet = waldoWidth * 0.02;
  target.classList.remove("hidden");
  target.style.left = x - offSet + "px";
  target.style.top = y - offSet + "px";
  let hideTargetTimeout = setTimeout(() => {
    target.classList.add("hidden");
  }, 150);
}

waldo.addEventListener("click", (e) => {
  if (waldo.offsetWidth != waldoWidth || waldoHeight != waldo.offsetHeight) {
    update();
  }

  let clickX = e.offsetX;
  let clickY = e.offsetY;

  let x = 100 * parseFloat(clickX / waldoWidth).toFixed(2);
  let y = 100 * parseFloat(clickY / waldoHeight).toFixed(2);

  console.log(x, y);
  placeTarget(e.clientX, e.clientY);
  checkHit(x, y);
});
