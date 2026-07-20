// // String
// let str = "Hello Piyas ";
// let str2 = "Hello World";

// console.log(str);
// console.log(str[1]);

// console.log(str.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(str.slice(3, 5));

// console.log(str.concat(str2));

// console.log(str2.charAt(0));
// console.log(str2.charAt(1));
// console.log(str2.charAt(3));
// console.log(str2.charAt(4));

let firstName = prompt("Enter Your First Name :");
let lastName = prompt("Enter Your Last Name :");

let fullName = firstName + lastName;
let userName = `@${fullName.toLowerCase()}${fullName.length}`;
console.log(userName);
