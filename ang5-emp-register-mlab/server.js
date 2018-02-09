var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var todos = require("./routes/todos");

var port = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false } ));

app.use(express.static(path.join(__dirname, "dist")));

app.use("/api", todos);

app.listen(port, () => {
    console.log("Server started on port " + port + " ...");
});
