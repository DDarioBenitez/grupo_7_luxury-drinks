const { validationResult } = require("express-validator");
const userService = require("../services/userService");
const bcrypt = require("bcryptjs")

module.exports = (req, res) => {

    const errors = validationResult(req)

    if (errors.isEmpty()) {

        const { email, password, surname, name } = req.body;
        const users = userService.findAll();

        const newUser = {
            id: !users.length ? 1 : users[users.length - 1].id + 1,
            name: name?.trim(),
            surname: surname?.trim(),
            email: email?.trim().toLowerCase(),
            password: bcrypt.hashSync(password?.trim(), 10),
            rol: "regular",
            avatar: "default-avatar-icon-of-social-media-user-vector.jpg"
        }

        userService.saveUser(newUser)

        res.redirect("/")
        return
    }

    res.render("auth/register", {
        old: req.body,
        errors: errors.mapped(),
    })

}