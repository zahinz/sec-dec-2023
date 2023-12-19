// 1. function in javascript
// DECLARE A FUNCTION

// global scope
const fname = "global scope";
console.log(fname);
const globalScope = "outside function";

function myFunction() {
  // function scope
  const fname = "function scope";
  const functionScope = "inside function";
  console.log(fname);
  // global scope can be accessed inside function
  console.log(globalScope, functionScope);
  console.log("Hello World");
}

// function scope cannot be accessed outside function
// console.log(functionScope);

function myFunction2() {
  // function scope
  console.log("Hello Mars");
}

// CALL A FUNCTION / INVOKE A FUNCTION
myFunction();
myFunction2();

// 2. function with parameters
// declate a parameter 'name' in function
function myFunction3(name) {
  console.log("Hello " + name);
}
myFunction3("John");
myFunction3("Jupiter");
let greeting = myFunction3("Johan");
console.log(greeting);

// 3. function with return value
// return statememt is used to transfer a value from function scope to global scope
function myFunction4(name) {
  return "Salam " + name;
}
let greetingSalam = myFunction4("Johan");
console.log(greetingSalam);
