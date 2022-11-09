export default function Target(props) {
  return (
    <div
      className={props.visible ? "target" : "target hidden"}
      style={{
        width: props.size,
        height: props.size,
        position: "absolute",
        left: props.x,
        top: props.y,
      }}
    />
  );
}
