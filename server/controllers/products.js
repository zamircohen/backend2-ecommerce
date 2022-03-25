const express = require("express");

const {getAllProducts} = require("../models/products");

const productRoutes = express.Router();

productRoutes.get("/", (_req, res) => {
  res.json({products: getAllProducts()});
});

module.exports = {productRoutes};
