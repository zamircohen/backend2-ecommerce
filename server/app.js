const express = require("express");
const cors = require("cors")

const { productRoutes } = require("./controllers/products.js")

const app = express()
const PORT = 5000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/products", productRoutes)

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
