const sales = "Toyota";

function types(name) {
    return name === "Honda" ? name : "Sorry";
}

const car = { mycar: "Saturn", getcar: types("Honda"), special: sales };

console.log(car.mycar);
console.log(car.getcar);
console.log(car.special);