class Student {
    #marks = 80;

    // Getter
    getMarks() {
        return this.#marks;
    }

    // Setter
    setMarks(value) {
        if (value >= 0 && value <= 100) {
            this.#marks = value;
        } else {
            console.log("Invalid marks!");
        }
    }
}

let s1 = new Student();

console.log(s1.getMarks()); // 80

s1.setMarks(95);
console.log(s1.getMarks()); // 95

s1.setMarks(150); // Invalid marks!