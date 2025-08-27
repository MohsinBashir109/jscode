const add = (a, b, cb) => {
  let result = a + b;
  cb(result);
};

add(2, 3, (value) => {
  console.log(value);
});

const addFunction = (a, b) => {
  let result = a + b;
  return () => console.log(result);
};

const result = addFunction(2, 3, (value) => {
  console.log(value);
});
result();
