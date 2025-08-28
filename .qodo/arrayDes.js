const student = ["mohsin", "ali", "hamza"];
const [name] = student;
const [, , name2] = student;
const [n, i, j] = student;
// console.log(name);
// const [...rest] = student;
console.log(rest);
// console.log(name2, n, i, j);\
const [a, b = "mohsin", c] = student;
console.log(a, b, c);
