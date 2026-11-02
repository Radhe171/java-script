const user = {
    name: "Radhe",
    age: 19
};

const copy = { ...user };

copy.name = "Aman";

console.log("Original:", user);
console.log("Clone:", copy);