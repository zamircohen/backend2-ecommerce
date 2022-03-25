const express = require("express");

const {getAllProducts, getProduct} = require("../models/products");

const productRoutes = express.Router();

productRoutes.get("/", (_req, res) => {
  res.json({products: getAllProducts()});
});

productRoutes.get("/:sku", (req, res) => {
  const product = getProduct(req.params.sku);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
});

module.exports = {productRoutes};
