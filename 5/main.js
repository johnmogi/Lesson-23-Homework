setInterval(() => {
  const colors = ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow"];
  i = Math.floor(Math.random() * 7);
  let colorChange = colors[i];

  // main.innerHTML = "";
  document.body.bgColor = colorChange;

  // main.append();
}, 1000);
