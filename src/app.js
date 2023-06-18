const express = require("express");
const app = express();
const path = require("path");
const mainRoute = require("./router/mainRoute");
const userRoute = require("./router/userRoute");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("server running in the port 3000");
});

app.use(mainRoute);
app.use("/user", userRoute);
