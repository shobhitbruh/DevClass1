//in Dev_1_Feb folder

// npm init -y
// npm install cheerio

// add .gitignore file
// add node_modules in .gitignore file


// index.html ka data
const fs = require("fs");


const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html");
// console.log(htmlKaData+"");


let ch = cheerio.load(htmlKaData);

// let h1Tags = ch("h1");
// let h1KaData=ch("h1").text();
// console.log(h1Tags);
// console.log(h1KaData);

// selectors

let outerH1 = ch("div h1").text();
console.log(outerH1);

let innerH1 = ch("ul h1").text();
console.log(innerH1);

// classes and ids
// classes can be duplicate
// ids always unique in a page

// choose elements on the basis of id

let uniqueH1 = ch("#unique").text();
console.log(uniqueH1);

// // choose elements on the basis of class => use dot

let inneraH1 = ch(".heading.inner").text();
console.log(inneraH1);



