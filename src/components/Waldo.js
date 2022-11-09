import { useState, useRef } from "react";
import Target from "./Target";

export default function Waldo(props) {
  let [targeting, setTargeting] = useState(false);
  let [targetCoords, setTargetCoords] = useState([0, 0]);
  return (
    <div className="waldo">
      <img src={props.image} className="waldoImage" />
      <Target visible={targeting} x={targetCoords[0]} y={targetCoords[1]} />;
    </div>
  );
}
