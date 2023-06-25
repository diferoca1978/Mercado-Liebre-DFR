// Module fs required, because we need read the json file.
const fs = require("fs");
// Module path required, because we need use the whole path to json file.
const path = require("path");

// Through the line below we are reading the data into json file.
const products = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/products.json"))
);

module.exports = {
  // Through this method we are filtering our products by his category and at the same time we are sharing with the view, the products from json file.
  index: (req, res) => {
    const visited = products.filter((row) => row.category == "seen");
    const sale = products.filter((row) => row.category == "in-sale");
    res.render("home", { seen: visited, insale: sale }); // * Through this line we pass as a second parameter to the view an object literal which refers the variables previously declared.
  },
};
