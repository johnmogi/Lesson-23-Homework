const cloths = [

    set1 = {
        type: "Blouse",
        size: "XL",
        price: "190$",
        color: "white"
    },
    set2 = {
        type: "V-neck",
        size: "L",
        price: "200$",
        color: "Black"
    },
    set3 = {
        type: "Underwear",
        size: "XLL",
        price: "1,000$",
        color: "transparent"
    },
    set4 = {
        type: "Hat",
        size: "SM",
        price: "1$",
        color: "#ff000"
    },
    set5 = {
        type: "Wings",
        size: "XLL",
        price: "5,000$",
        color: "Angelic White"
    }
]

// for (set of cloths) {
//     for (obj in set) {
//         console.log("---------*---------")
//         console.log(obj + ": " + set[obj])
//     }
// }


function returnAvgPrice(arr) {
    for (arr of cloths) {
        sum = cloths.reduce((a, b) => (a + b)) / cloths.length;
        console.log(parseInt(sum))
        avg = sum / cloths.length;
        console.log(avg, arr.price)

    }
}
returnAvgPrice(cloths)

// var sum = 0;
// for( var i = 0; i < cloths.length; i++ ){
//     sum += parseInt( arr.price, 10 ); //don't forget to add the base
// }

// var avg = sum/elmt.length;

// document.write( "The sum of all the elements is: " + sum + " The average is: " + avg );