const TextTypeInputs = {
  tittle: "mohsin",
  age: 21,
  data: {
    ageqwqw: "21123",
  },
};
console.log("====================================");
console.log(TextTypeInputs);
console.log("====================================");
const mohsin = TextTypeInputs;
console.log(mohsin);
mohsin.data.ageqwqw = "45";
console.log("====================================");
console.log(TextTypeInputs);
console.log("====================================");
console.log(mohsin);
