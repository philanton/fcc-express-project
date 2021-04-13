var express = require('express');
var app = express();

console.log("Hello World");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
app.get("/", (req, res) => res.send("Hello Express"));

app.get("/json", (req, res) => {
  res.json({"message": "Hello json"}
         ? MESSAGE_STYLE!=="uppercase"
         : {"message": "HELLO JSON"});
});
































 module.exports = app;
