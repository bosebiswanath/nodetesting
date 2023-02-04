const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/ProductController')

router.get('/viewproducts', ProductController.GetProducts);
router.post('/createproduct', ProductController.CreateProduct);
module.exports = router;