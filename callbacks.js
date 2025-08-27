function calculator(a, b, callBacks) {
  callBacks(a, b);
}
calculator(1, 2, (a, b) => {
  console.log(a + b);
});
calculator(1, 2, (a, b) => {
  console.log(a - b);
});
calculator(1, 2, (a, b) => {
  console.log(a / b);
});
calculator(1, 2, (a, b) => {
  console.log(a * b);
});
// or
function sum(a, b) {
  console.log(a + b);
}
calculator(1, 2, sum);
