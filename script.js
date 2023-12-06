const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.static('./public'));

app.get("/", function (req, res) {
  res.render("SateLite");
});

app.get("/er", function (req, res) {
  throw Error("Why are doing nachiket");
});

app.get("/error", function (req, res,next) {
  
  throw Error("I dont know Went wrong");
});

app.get("/Contact", function (req, res) {
  res.render("contacts");
});

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000); 