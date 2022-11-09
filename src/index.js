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
