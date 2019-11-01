// function writeName(a) {
//   document.write(a);
// }
// const myName = "john";
// writeName(myName);

const myName = "john";

function a(callback) {
  document.write(callback);
}

function b(callback) {
  a(callback);
}
b(myName);
