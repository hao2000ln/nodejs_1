const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebar1 = require("express-handlebars");
const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, "public")));

// sử dụng post lấy dư xlieuej form
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// Xmlhttps

//HTTP Logger
app.use(morgan("combined"));

// express handlebars/ template engine
// app.engine("handlebars", handlebar1.engine());
app.engine("hbs", handlebar1.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

app.get("/", (req, res) => {
  // return res.send(`
  //   <h1>Lương Ngọc Hảo - 2000</h1>
  // `);
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  // console.log(req.query.q);
  res.render("search");
});

app.post("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// https://www.google.com/search?q= Từ khóa tk$ref=f8&author=sondn
