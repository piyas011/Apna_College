// const marks = [78, 67, 77, 98, 87, 60, 67, 56, 45, 43];
// const studentName = ["piyas", "rohim", "korim", "lasma", "lolita", "maya"];
// marks[3] = 100;
// console.log(marks);
// console.log(studentName);

// console.log(marks.length);
// console.log(studentName.length);
// console.log(marks[7]);

// studentName[0] = "Piyas Ahmed";
// console.log(studentName);

// for (let name of studentName) {
//   console.log(name);
// }
// for (let mark of marks) {
//   console.log(mark);
// }

// for (let i = 0; i < studentName.length; i++) {
//   console.log(studentName[i]);
// }

// console.log("------------------------------------------");
// let i = 0;
// while (i < studentName.length) {
//   console.log(studentName[i]);
//   i++;
// }

// console.log("------------------------------------");
// let x = 0;
// do {
//   console.log(studentName[x]);
//   x++;
// } while (x < studentName.length);

// console.log("------------------------------------");

// for (let x of studentName) {
//   console.log(x);
// }

// console.log("------------------------------------");

// for (let x of studentName) {
//   console.log(x.toUpperCase());
// }

// // marks average
// let totalMarks = 0;
// for (let x of marks) {
//   totalMarks = totalMarks + x;
// }
// let averageMark = totalMarks / marks.length;
// console.log(`Average Students Mark ${averageMark}`);

// console.log("------------------------------------");

// // All items have an offer of 10% Off

// const price = [250, 645, 300, 900, 50];
// const offerPrice = [];
// const offer = 0.1;

// for (let x of price) {
//   let offPrice = x - x * offer;
//   offerPrice.push(offPrice);
// }
// console.log(price);
// console.log(offerPrice);

// const marks = [78, 67, 77, 98, 87, 60, 67, 56, 45, 43];
// const studentName = ["piyas", "rohim", "korim", "lasma", "lolita", "maya"];
// console.log(marks);
// marks.push(23);
// console.log(marks);
// marks.pop();
// console.log(marks);
// console.log(studentName);

// console.log(studentName.toString());
// console.log(marks.toString());

// console.log(studentName.concat(marks));
// marks.unshift(34);
// console.log(marks);

// marks.shift();
// console.log(marks);

const marks = [78, 67, 77, 98, 87, 60, 67, 56, 45, 43];
const studentName = ["piyas", "rohim", "korim", "lasma", "lolita", "maya"];

studentName.splice(3, 1, "Salma", "Rohima");
console.log(marks);
console.log(studentName);

console.log(marks.slice(0, 5));
console.log(marks);

const companies = [
  "Bloomberg",
  "Microsoft",
  "Uber",
  "Google",
  "IBM",
  "Netflix",
];

console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
