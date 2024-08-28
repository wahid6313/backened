const fs = require("fs");

const a = 10;

setImmediate(() => {
  console.log("setImmediate");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("file reading callback");
});

setTimeout(() => {
  console.log("set timeout");
}, 0);

function printA() {
  console.log("a = ", a);
}

printA();
console.log("last line will execute");
