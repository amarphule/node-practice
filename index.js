const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("data.json", "utf-8");

console.log(data);
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("content-type", "text/html");
      res.end("<h1>hello</h1>");
      break;
    case "/products":
      res.setHeader("content-type", "application/json");
      res.end(data);
      break;
    default:
        res.writeHead(404);
        res.end();
  }
  // console.log("server");
  // console.log(req.url, req.method);
  // // res.setHeader('content-type','text/html')
  // res.end('<h1>hello</h1>')
});

server.listen(8080);
