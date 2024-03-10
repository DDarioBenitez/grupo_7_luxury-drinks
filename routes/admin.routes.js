const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

// "/admin"

router.get("/lista-de-productos", adminController.listProducts);

router.get("/crear-producto", adminController.createProduct);

router.get("/editar-producto", adminController.updateProduct);


router.delete("/eliminar-producto/:id", adminController.deleteProduct);


module.exports = router;