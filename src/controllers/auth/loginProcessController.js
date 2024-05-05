const { compareSync } = require("bcryptjs");
const userService = require("../services/userService");

module.exports = (req, res) => {
    const { email, password, remember } = req.body;
    const users = userService.findAll();

    if (!email) {
        return res.send("El email es obligatorio")
    }

    if (!password) {
        return res.send("La contraseña es obligatoria")
    }

    const user = users.find((u) => u.email === email);
    if (!user) {
        return res.send("El usuario no existe");
    }

    if (!compareSync(password, user.password)) {
        return res.send("La contraseña es incorrecta");
    }
    const { email: userName, password: pass } = user;
    req.session.userLogin = { userName, pass };

    if (remember) {
        res.cookie("userLogin", { userName, pass }, { maxAge: 1000 * 60 * 60 * 24 * 30 });
    }

    res.redirect("/");
}
