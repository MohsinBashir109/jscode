const person = { name: "Alice", age: 30, city: "New York" };

// const { name, age, work } = person;
const { name: fulNanme = "mohsin", age: dateOfBirth = 25 } = person;

//console.log(name); // 'Alice'
//console.log(age); // 30
console.log(fulNanme); // 30
console.log(dateOfBirth); // 30

// console.log(work);
