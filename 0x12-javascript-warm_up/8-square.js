#!/usr/bin/node
const myArray = Math.floor(Number(process.argv[2]));
if (isNaN(myArray)) {
  console.log("Missing size");
} 
else {
  for (let i = 0; i < myArray; i++) {
    let square = "";
    for (let j = 0; j < myArray; j++){
        square += "X"
    }
    console.log(square);
  }
}