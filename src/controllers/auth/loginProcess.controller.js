const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const { email, password, remember } = req.body;

        db.user.findOne({
            where: {
                email,
            }
        }).then((user) => {

            if (!email) {
                return res.send("debe mandar un email")
            }

            if (!user) return res.send("El usuario no existe");

            const isPasswordValid = bcrypt.compareSync(password, user?.password);

            if (!isPasswordValid) {
                return res.send("Contraseña invalida")
            }

            const { name, surname, rol, avatar, id } = user
            req.session.userLogin = {
                id,
                name,
                surname,
                email,
                rol,
                avatar,
            };

            if (remember) {
                res.cookie("userLogin", req.session.userLogin, { maxAage: 5000 })
            }

            res.redirect("/")
            return
        })
    }
}

