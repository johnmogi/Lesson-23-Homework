const cloths = [
  (set1 = {
    type: "Blouse",
    size: "XL",
    price: "190",
    color: "white"
  }),
  (set2 = {
    type: "V-neck",
    size: "L",
    price: "200",
    color: "Black"
  }),
  (set3 = {
    type: "Underwear",
    size: "XLL",
    price: "1000",
    color: "transparent"
  }),
  (set4 = {
    type: "Hat",
    size: "SM",
    price: "500",
    color: "#ff000"
  }),
  (set5 = {
    type: "Wings",
    size: "XLL",
    price: "8000",
    color: "Angelic White"
  })
];

const total = [];

function returnAvgPrice(arr) {
  for (arr of cloths) {
    total.push(arr.price);
  }
}

returnAvgPrice(cloths);
console.log(total);
// sumPrices(total);
var sumTotal = 0;
for (var i in total) {
  //   sumTotal += sumTotal[i];
  console.log(sumTotal);
}
// console.log(sumTotal);
// console.log(sumTotal);
// console.log(
//   "the Average price of cloths is: " + parseInt(total) / cloths.length
// );
