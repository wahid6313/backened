const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 3; //increase or decrease size pf thread pool----------------

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1  - crypto pbkdf2 is done");
});

// fs.readFile("./file.txt", "utf8", () => {
//   console.log("file data is CB");
// });

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2  - crypto pbkf2 is done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3  - crypto pbkf2 is done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4  - crypto pbkf2 is done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5 - crypto pbkf2 is done");
});
