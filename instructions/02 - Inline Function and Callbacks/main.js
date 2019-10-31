

// // First Example: 
// let myFunc = function doSomething() {
//     console.log("Doing Something...");
// }
// // doSomething(); // Error.
// myFunc();


// // Second Example: 
// let myFunc = function () {
//     console.log("Doing Something...");
// }
// myFunc();


// // Third Example: 
// function doWork(callback) { // Callback
//     console.log("Start");
//     callback(); // doWork needs to do something, but only the caller knows what exactly the code is.
//     console.log("End");
// }
// doWork(function () {
//     console.log("Doing Something...");
// });


// // Fourth Example: 
// function doWork(callback) {
//     console.log("Start");
//     callback(10, 20, 30);
//     console.log("End");
// }
// doWork(function (a, b, c) {
//     console.log("Doing Something...", a, b, c);
// });


// // Fifth Example:
// function doWork(callback) {
//     console.log("Start");
//     callback({
//         name: "Mitsi", 
//         age: 4
//     });
//     console.log("End");
// }
// doWork(function (kitten) {
//     console.log("Doing Something...", kitten.name, kitten.age);
// });



// Sixth Example:
function doWork(callback) {
    console.log("Start");
    callback({
        firstName: "Moishe",
        lastName: "Ufnik",
        cc: {
            type: "VISA",
            number: "698547854213"
        }
    })
    console.log("End");
}
doWork(function (customer) {
    console.log(customer);
    console.log("Customer Details: ", customer.firstName, customer.lastName, customer.cc.type, customer.cc.number);
});



