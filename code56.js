const person = {
    name: "Rahul",
    age: 20,
    city: "Bhopal"
};

const clone = Object.assign({}, person);
console.log(person);
console.log(clone);