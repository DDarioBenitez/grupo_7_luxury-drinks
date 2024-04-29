const express = require("express");
const router = express.Router();

const { login, register, loginProcess } = require("../controllers/auth");


router.get("/iniciar-sesion", login);
router.post("/iniciar-sesion", loginProcess);

router.get("/registrarse", register);



module.exports = router;