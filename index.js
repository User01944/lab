// import http from "http";

// const server = http.createServer((req, res) => {
//   res.write("Hello world");
//   res.end();
// });

// server.listen(5000, () => {
//   console.log("Server connected");
// });
// console.log("Hello world");

// const tutorial = require("./server");
// console.log(tutorial.sum(3, 4));
// console.log(tutorial.PI);
// console.log(new tutorial.student());

// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("tutorial", (num1, num2) => {
//   console.log(num1 + num2);
// });

// eventEmitter.emit("tutorial", 1, 2);

// class Person extends EventEmitter {
//   constructor(name) {
//     super();
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }
// }

// let pedro = new Person("Pedro");

// pedro.on("name", () => {
//   console.log(`my name is ${pedro.name}`);
// });

// pedro.emit("name");

// const fs = require("fs");
// const fsPromises = require("fs").promises;
// const path = require("path");

// const fileOps = async () => {
//     try{
//         const data = await isPromises
//     }
// }
// fs.writeFile(path.join(__dirname, "starter.txt"), "Nice to meet you", (err) => {
//   if (err) throw err;
//   console.log("Write complete");
// });
// fs.readFile("./hello.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.appendFile(path.join(__dirname, "reply.txt"), " appending file", (err) => {
//   if (err) throw err;
//   console.log("append complete");
// });
// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//   })
//   .listen(8080);
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8080);

// var http = require("http");
// var dt = require("./server");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time is currently: " + dt.myDateTime());
//     res.end();
//   })
//   .listen(8080);
