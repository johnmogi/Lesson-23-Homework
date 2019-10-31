const cellPhone = {
    model: "S9",
    manufacturer: "Samsung",
    price: "3K",
    screen_size: "4.5"
}

function runAForLoop() {
    console.log(
        "the cellPhone object contains the following properties: ")
    for (obj in cellPhone) {
        console.log(cellPhone[obj])
    }
}
runAForLoop()
cellPhone.Os = "Android"
console.log(
    "added the following OS: " +
    cellPhone.Os)
runAForLoop()