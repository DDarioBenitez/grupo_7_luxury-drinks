const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");


router.get("/iniciar-sesion", authController.login);
router.get("/registrarse", authController.register);

router.get("/actualizar-usuario/:id", authController.editUser);
router.put("/actualizar-usuario/:id", authController.updateUser);

module.exports = router;