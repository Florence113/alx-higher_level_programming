#!/usr/bin/node
const myArray = Math.floor(Number(process.argv[2]));
if (isNaN(myArray)) {
  console.log("Missing number of occurrences");
} 
else {
  for (let i = 0; i < myArray; i++) {
    console.log("C is fun");
  }
}