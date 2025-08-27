// const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.forEach((item) => console.log(item + 2));
// console.log("==========================================", numbers);
const numbers = [1, 2, 3];
numbers.forEach((n, i, arr) => (arr[i] = n * 2));
console.log(numbers);
console.log(numbers);
