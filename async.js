const fs = require("fs");
const https = require("https");

console.log("hello world");

var a = 123;
var b = 234;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data succesfully");
});

setTimeout(() => {
  console.log("timeOut succesfully");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("file data: ", data);
});

function multiply(x, y) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("multiply value:", c);
