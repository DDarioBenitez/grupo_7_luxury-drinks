const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");


router.get("/detalle-de-producto", productsController.details);
router.get("/Editor-de-producto", productsController.edit);




module.exports = router;