import { useState, useRef } from "react";
import Target from "./Target";

export default function Waldo(props) {
  let [targeting, setTargeting] = useState(false);
  let [targetCoords, setTargetCoords] = useState([0, 0]);
  let [targetSize, setTargetSize] = useState(null);
  let waldoRef = useRef(null);

  let image = new Image();
  image.src = props.image;
  let ratio = image.naturalWidth / image.naturalHeight;

  function placeTarget({ size, x, y }) {
    setTargetSize(size);
    let offset = targetSize / 2;
    setTargetCoords([x - offset + "px", y - offset + "px"]);
    setTargeting(true);
    let hideTargetTimeout = setTimeout(() => {
      setTargeting(false);
    }, 150);
  }

  function handleClick(e) {
    let waldoWidth = waldoRef.current.offsetWidth;
    let waldoHeight = waldoRef.current.offsetHeight;

    let clickX = e.offsetX;
    let clickY = e.offsetY;

    let x = 100 * parseFloat(clickX / waldoWidth).toFixed(2);
    let y = 100 * parseFloat(clickY / waldoHeight).toFixed(2);

    console.log(x, y);
    placeTarget({
      size: waldoWidth * 0.04,
      x: clickX,
      y: clickY,
    });
  }
  return (
    <div className="waldo">
      <img
        ref={waldoRef}
        src={props.image}
        className="waldoImage"
        onClick={(e) => {
          handleClick(e.nativeEvent);
        }}
      />
      <Target
        visible={targeting}
        x={targetCoords[0]}
        y={targetCoords[1]}
        size={targetSize}
      />
      ;
    </div>
  );
}
