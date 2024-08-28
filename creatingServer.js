/**
 * streaming and buffer
 * tcp / ip
 * http / ftp / smpt
 * DNS
 *
 */

const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("there is no secret data");
  }

  res.end("hello world"); //close thst server ya passing through request----
});
server.listen(2121);
