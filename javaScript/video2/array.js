const marks = [78, 67, 77, 98, 87, 60, 67, 56, 45, 43];
const studentName = ["piyas", "rohim", "korim", "lasma", "lolita", "maya"];
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

for (let i = 0; i < studentName.length; i++) {
  console.log(studentName[i]);
}

console.log("------------------------------------------");
let i = 0;
while (i < studentName.length) {
  console.log(studentName[i]);
  i++;
}

console.log("------------------------------------");
let x = 0;
do {
  console.log(studentName[x]);
  x++;
} while (x < studentName.length);

console.log("------------------------------------");

for (let x of studentName) {
  console.log(x);
}

console.log("------------------------------------");

for (let x of studentName) {
  console.log(x.toUpperCase());
}

// marks average
let totalMarks = 0;
for (let x of marks) {
  totalMarks = totalMarks + x;
}
let averageMark = totalMarks / marks.length;
console.log(`Average Students Mark ${averageMark}`);

console.log("------------------------------------");

// All items have an offer of 10% Off

const price = [250, 645, 300, 900, 50];
const offerPrice = [];
const offer = 0.1;

for (let x of price) {
  let offPrice = x - x * offer;
  offerPrice.push(offPrice);
}
console.log(price);
console.log(offerPrice);
