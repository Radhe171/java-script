
// Original object
const car1 = {
    brand: "BMW",
    model: "M5",
    color: "Black",
    year: 2025,
    price: 10000000
};

// Clone car1 using spread operator
const car2 = { ...car1 };

// Clone car1 using Object.assign()
const car3 = Object.assign({}, car1);

// Display all three objects
console.log("Original Car:", car1);
console.log("Cloned Car 1:", car2);
console.log("Cloned Car 2:", car3);

// Modify cloned objects
car2.color = "Red";
car3.model = "X5";

console.log("After modification:");

console.log("Car 1:", car1);
console.log("Car 2:", car2);
console.log("Car 3:", car3);
