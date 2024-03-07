const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

// "/admin"

router.get("/lista-de-productos", adminController.listProducts);

router.get("/crear-producto", adminController.createProduct);

router.get("/editar-producto/:id", adminController.editProduct);
router.put("/editar-producto/:id", adminController.updateProduct);

router.get("/eliminar-producto", adminController.deleteProduct);


module.exports = router;