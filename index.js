let waldo = document.getElementById("waldo");

waldo.addEventListener("click", (e) => {
  let waldoWidth = waldo.offsetWidth;
  let waldoHeight = waldo.offsetHeight;

  let clickX = e.offsetX;
  let clickY = e.offsetY;

  let x = 100 * parseFloat(clickX / waldoWidth).toFixed(2);
  let y = 100 * parseFloat(clickY / waldoHeight).toFixed(2);

  console.log(x, y);
  console.log(clickX, clickY);
});
