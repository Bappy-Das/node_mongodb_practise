const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 8000;
const dbConnect = require("./utils/dbConnect");
const toolsRoute = require("./routes/tools.route");

dbConnect();
app.use('/', toolsRoute)
// const server = http.createServer((req, res) => {
//     res.end("Hello Node Js");
// })
// server.listen(port)
console.log(`Server Connected to Port: ${port}`);
