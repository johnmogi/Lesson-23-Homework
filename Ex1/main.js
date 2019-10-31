const cellPhone = {
  model: "S9",
  manufacturer: "Samsung",
  price: "3K",
  screenSize: "4.5"
};

window.addEventListener("DOMContentLoaded", event => {
  const main = document.getElementById("container");
  const p = document.createElement("p");

  for (obj in cellPhone) {
    // main.append(Object.values)
    // const breaker = document.createElement("br");
    // main.appendChild(breaker);
    console.log(obj.model);
  }
});
cellPhone.os = "android";
