const obj = { ownProp: 1 };
// console.log("ownProp" in obj);
// console.log("mohsin" in obj);

const obj2 = {
  name: "mohsin",
  age: 56,
};

// console.log(Object.hasOwn(obj2, "age"));
// console.log(Object.hasOwn(obj2, "name"));
// console.log(Object.hasOwn(obj2, "city"));

// const obj2 = { ownProp: 1 };
console.log(Object.hasOwn(obj2, "name")); // true
console.log(Object.hasOwn(obj2, "age")); // true
console.log(Object.hasOwn(obj2, "city")); // false (inherited)
