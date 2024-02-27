const express = require("express");
const router = express.Router();

const createController = require("../controllers/admin");


router.get("/crear-producto", createController.createProduct);




module.exports = router;