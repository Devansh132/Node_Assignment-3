var express = require('express');
var router = express.Router();
var productController = require('../controller/productController')

/* GET users listing. */
router.post("/create", productController.createProduct);
router.get("/list", productController.listProducts);
router.delete("/delete/:_id", productController.deleteProduct);
router.put("/update/:_id", productController.updateProduct);

module.exports = router;
