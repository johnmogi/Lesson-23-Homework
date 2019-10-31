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
// let i = 0
for (set of cloths) {
    // i++
    for (obj in set) {
        console.log("---------*---------")
        console.log(obj + ": " + set[obj])
    }
}