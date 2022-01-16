function add(n1: number, n2: number) {
  // Implicit return -> void
  return n1 + n2;
}

function printResult(num: number): void {
  // Explicit return -> void | undefined
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  // Callbacks and return values
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number; // Function Type

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
