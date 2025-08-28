const numbers = [1, 3, 5, 7];
const find = numbers.find((n) => n % 2 === 0);

console.log(find); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (unchanged)
