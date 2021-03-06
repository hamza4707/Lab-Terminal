var express = require("express");
var router = express.Router();
var Product = require("../models/product");
/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  console.log(req.session.user);
  console.log("products: ", products);
  res.render("products/list", { title: "Products In DB", products });
});
router.get("/cart", function (req, res, next) {
  let cart = req.cookies.cart;
  if (!cart) cart = [];
  res.render("cart", { cart });
});

module.exports = router;
