const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const { registerValidation } = require("../middlewares/validations/auth.validation");
const { LoginValidation } = require("../middlewares/validations/auth.validation");
const {updateValidation} = require("../middlewares/validations/updateUser.validation")
const {loginAndRegisterGoogle} = require("../controllers/auth");
const passport = require("passport")

router.get("/iniciar-sesion", authController.login);
router.post("/iniciar-sesion",LoginValidation,authController.loginProcess);

router.get("/registrarse", authController.register);
router.post("/registrarse", registerValidation ,authController.registerProcess);


//router.get("/perfil", authController.perfil)

router.get("/actualizar-usuario/:id", authController.editUser);
router.put("/actualizar-usuario/:id", updateValidation, authController.updateUser);

router.get("/cerrar-sesion", authController.logout)

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

/*
//login google
router.get("/auth/iniciar/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google/callback", passport.authenticate("google", {failureRedirect:"/auth/iniciar"}),
loginAndRegisterGoogle
);*/

module.exports = router;