class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    display() {
        console.log("Brand:", this.brand);
        console.log("Color:", this.color);
    }
}

// Creating objects
let car1 = new Car("BMW", "Black");
let car2 = new Car("Toyota", "White");

// Calling the method
car1.display();
car2.display();