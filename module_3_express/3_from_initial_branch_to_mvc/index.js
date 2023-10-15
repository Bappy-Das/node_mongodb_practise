const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utilis/dbConnect");
const toolsRoute = require('./routes/v1/tools.route');
let ejs = require('ejs');
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// Database connection 
dbConnect();

// route call
app.use('/api/v1/tools', toolsRoute);


app.get("/", (req, res) => {
  res.send("This is node mongo server")

  // send file from public directory
  // res.sendFile(__dirname + "/public/test.html")

  // send file as view by using EJS
  // res.render("home.ejs", {
  //   id: 2
  // })
});

// No Route Found
app.all("*", (req, res) => {
  res.send("No Route Found");
});

// global error handler
app.use(errorHandler);

// listen and show on the cmd
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Unhandle rejection handle by this code. if errorhandler does not able to handle the error then it shoutdown by this function
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});


