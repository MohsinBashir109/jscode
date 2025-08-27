// const obj = {
//   name: "mohsin",
//   age: 25,
// };

// const obj2 = obj;
// obj2.name = "bashir";

// console.log(obj, obj2);
// Actual way of copying an object
const obj = {
  name: "mohsin",
  age: 25,
};

const obj2 = { ...obj };
obj2.name = "bashir";

console.log(obj, obj2);

const a = [1, "2", 3, [1]];
const b = [...a];
b[1] = 67;
console.log(a);
console.log(b);

//SHALLOW COPY cv v
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value

console.log("Sum:", sum); // Output: Sum: 100
const search = "mohsun";

console.log();
