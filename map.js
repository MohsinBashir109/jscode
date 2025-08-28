// const numbers = [1, 2, 3];
// const double = numbers.map((n, i, arr) => (arr[i] = n * 2));
// console.log(double);
// console.log(numbers);
const numbers = [1, 2, 3];
const double = numbers.map((n) => n * 2);

console.log(double); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (unchanged)
