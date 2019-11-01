let test = ["190", "200", "1000", "500", "8000"];
function sum(test) {
  return test.reduce((sum, num) => sum + num, 0);
}

console.log(test);
