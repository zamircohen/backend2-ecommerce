const fs = require("fs");
const path = require("path");
const util = require("util");

const PRODUCTS_FILE = path.join(__dirname, "products.json");
const readFile = util.promisify(fs.readFile);

const readProducts = async () => {
  return JSON.parse(await readFile(PRODUCTS_FILE)).products
};

const getAllProducts = readProducts;

const getProduct = async (sku) => {
  const products = await readProducts();
  return products.find(product => product.sku === sku);
}

module.exports = {getAllProducts, getProduct};
