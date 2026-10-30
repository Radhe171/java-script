// Get current date
const today = new Date();

// Get current date details
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

// Display date and time
console.log("Current Date:", date + "/" + month + "/" + year);
console.log("Current Time:", hours + ":" + minutes + ":" + seconds);

// Calculate age
const birthYear = 2007;
const currentYear = today.getFullYear();

const age = currentYear - birthYear;

console.log("Your Age:", age);