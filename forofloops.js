array = [1, 2, 3, 4, 5];
result = 0;
for (a of array) {
  result += 1;
}
console.log(result);
const student = {
  name: "mohsin",
  age: 25,
  gpa: 3.1,
};

const deArray = Object.entries(student);
const [name, age, gpa] = deArray;
console.log(name, age, gpa);
