const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];
const find = numbers.includes((n) => n % 2 === 0);

console.log(find); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (unchanged)
