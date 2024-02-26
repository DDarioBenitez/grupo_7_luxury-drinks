const express = require("express");
const router = express.Router();

const createController = require("../controllers/products");


router.get("/", createController.createProduct);




module.exports = router;