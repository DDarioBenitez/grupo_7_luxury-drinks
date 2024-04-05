const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");


router.get("/iniciar-sesion", authController.login);
router.post("/iniciar-sesion", authController.loginProcess);

router.get("/registrarse", authController.register);
router.post("/registrarse",authController.registerProcess);


router.get("/perfil", authController.perfil)


module.exports = router;