const express = require("express");

const { productRoutes } = require("./controllers/products.js")

const app = express()
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/products", productRoutes)

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
