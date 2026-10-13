
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let emp1 = new Employee("Radhe", 30000);
let emp2 = new Employee("Amit", 40000);

emp1.display();
emp2.display();
