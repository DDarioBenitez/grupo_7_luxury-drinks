const { validationResult } = require("express-validator");
const userService = require("../services/userService");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => {
    const errors = validationResult(req)
    console.log(errors)
    if (errors.isEmpty()) {

        const { id } = req.params;

        const { name, email, lastname, password } = req.body;
        const users = userService.findByEmail(email);
        const newData = {
            name: name?.trim(),
            email: email?.trim(),
            lastname: lastname?.trim(),
            password: bcrypt.hashSync(password?.trim(), 10),
        }
        userService.updateUser(id, newData);
        res.redirect('/');
    }

    res.render("auth/updateUser", { user: req.body, errors: errors.mapped() })
}