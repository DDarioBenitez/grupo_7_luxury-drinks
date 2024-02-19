const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");


router.get("/iniciar-sesion", authController.login);
router.get("/registrarse", authController.register);



module.exports = router;