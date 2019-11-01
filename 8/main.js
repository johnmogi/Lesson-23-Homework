// const body = document.getElementById("body");

function nice(paintCallback) {
  paintCallback("Green");
}
function paintCallback(paintCallback) {
  document.body.bgColor = paintCallback;
  // document.body.bgColor = paintCallback;
}
nice(paintCallback);
