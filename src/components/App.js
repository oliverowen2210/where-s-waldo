import { useState } from "react";
import WaldoImage from "../images/waldo.jpeg";
import Waldo from "./Waldo";

let board = {
  image: WaldoImage,
  characters: {
    waldo: {
      start: [78, 7],
      end: [81, 12],
      hit: false,
    },
  },
};

export default function App(props) {
  let [selectedBoard, setSelectedBoard] = useState(board);

  return (
    <div className="App">
      <h1>Wald</h1>
      <Waldo board={selectedBoard} />
    </div>
  );
}
