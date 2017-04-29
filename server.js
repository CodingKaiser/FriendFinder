var express = require("express");
var bodyParser = require("body-parser");
var loadHtmlStaticPages = require("./app/routing/htmlRoutes.js");
var loadApiRoutes = require("./app/routing/apiRoutes.js");
var friendDb = new (require("./app/data/friends.js"));

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

loadHtmlStaticPages(app, express);
loadApiRoutes(app, friendDb);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
