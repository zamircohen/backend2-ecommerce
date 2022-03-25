const express = require("express");
const cors = require("cors");

const {productRoutes} = require("./controllers/products");

const app = express()
const PORT = 5000;

app.use(cors());

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
