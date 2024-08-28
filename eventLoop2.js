const fs = require("fs");
// const promise = require("promise");

const a = 10;

setImmediate(() => {
  console.log("imediate function");
});

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("file read CB");
});

setTimeout(() => {
  console.log("timeOut function");
}, 0);

process.nextTick(() => {
  console.log("nextTick function");
});

function printA() {
  console.log("a = ", a);
}

printA();
console.log("last line will print");
