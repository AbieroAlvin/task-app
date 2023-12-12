const express = require("express");
const path = require("path");
const tasks = require("./model/Tasks");
const { engine } = require("express-handlebars");

const app = express();

// Handlebars MiddleWare
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

// Body Perser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Tasks App",
    tasks,
  })
);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
