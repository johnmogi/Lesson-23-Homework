const car1 = {
    model: "i10",
    manufacturer: "Hyundai",
    year: "2017",
    color: "white"
}
const car2 = {
    model: "718 GTS",
    manufacturer: "Porsche",
    year: "2019",
    color: "Metallic red"
}

const car3 = {
    model: " Vision M",
    manufacturer: "BMW",
    year: "2025",
    color: "Silver"
}
const cars = [car1, car2, car3]
// let i = 0
for (car of cars) {
    // i++
    for (obj in car) {
        console.log("---------*---------")
        console.log(obj + ": " + car[obj])
    }
}