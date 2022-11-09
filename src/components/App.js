import { useState } from "react";
import WaldoImage from "../images/waldo.jpeg";
import Waldo from "./Waldo";

export default function App(props) {
  let [selectedImage, setSelectedImage] = useState(WaldoImage);

  return (
    <div className="App">
      <h1>Wald</h1>
      <Waldo image={selectedImage} />
    </div>
  );
}
