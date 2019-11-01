function cool(paintCallback) {
  paintCallback();
}

function paintCallback() {
  setInterval(() => {
    const colors = ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow"];
    i = Math.floor(Math.random() * 7);
    let colorChange = colors[i];
    document.body.bgColor = colorChange;
  }, 1000);
}
cool(paintCallback);
