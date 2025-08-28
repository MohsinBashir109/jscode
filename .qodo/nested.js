const student = {
  name: "Ali",
  address: {
    city: "Lahore",
    zip: 54000,
  },
};

const {
  name,
  address: { city, zip },
} = student;

console.log(name); // Ali
console.log(city); // Lahore
console.log(zip); // 54000
const numbers = [1, [2, 3], 4];

const [a, [b, c], d] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
const person = {
  id: 1,
  nameLast: "Mohsin",
  hobbies: ["Coding", "Reading", "Gaming"],
};

const {
  nameLast,
  hobbies: [firstHobby, secondHobby],
} = person;

console.log(nameLast); // Mohsin
console.log(firstHobby); // Coding
console.log(secondHobby); // Reading
