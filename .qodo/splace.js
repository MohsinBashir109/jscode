const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = numbers.splice(4);
// const newNum = numbers.splice(0);
const newNum = numbers.splice(1, 4);

console.log("New ", newNum);
console.log("Ori", numbers);
