const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = require("./controllers/items_controller");

app.use(router);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
