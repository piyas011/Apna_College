// This code prints hello world
console.log("Hello World");

let a = 5;
let b = 2;

console.log(`a + b = ${a + b}`);
console.log(`a - b = ${a - b}`);
console.log(`a * b = ${a * b}`);
console.log(`a / b = ${a / b}`);
console.log(`a % b = ${a % b}`);
console.log(`a ** b = ${a ** b}`);

// Unary Operator
console.log("------------------------------------");

let c = 5;
let d = 2;
console.log(`c = ${c} & d = ${d}`);
c = c + 1; // 6
console.log(`c = ${c}`);

console.log("------------------------------------");
// increment
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`++a = `, ++a);
console.log(`a++ = ${a++}`);
console.log(`a = ${a}`);

console.log(`------------------------------------------`);
//dicrement
console.log(`a = ${a}`);
console.log(`b = ${b}`);

console.log(`--a = ${--a}`);
console.log(`a-- = ${a--}`);
console.log(`a = ${a}`);

console.log(`-------------------------`);
//Comparison Operators
a = 10; //Number
b = "10"; // String

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a == b : ${a == b}`);
console.log(`a != b : ${a != b}`);

console.log(`-------------------------`);
console.log(`a = ${a} number`);
console.log(`b = ${b} String`);

console.log(`a === b : ${a === b}`);
console.log(`a !== b : ${a !== b}`);
console.log(`a > b : ${a > b}`);
console.log(`a >= b : ${a >= b}`);
console.log(`a < b : ${a < b}`);
console.log(`a <= b : ${a <= b}`);

// Olgical Operator
let num1 = 10;
let num2 = 10;

console.log("cond1 && cond2 =", num1 >= num2 && num1 <= num2);
console.log("cond1 || cond2 =", num1 >= num2 || num1 < num2);
console.log("(!cond1 >= cond2) =", !(num1 >= num2));
