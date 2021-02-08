//import
const fs=require("fs");
// read a file
// low level data
let filekadata=fs.readFileSync("./ea.txt","utf-8");
console.log(filekadata);