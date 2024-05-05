const userService = require("../services/userService");

module.exports = (req, res) => {
    const { id } = req.params;
    userService.findById(id)
        .then(userFind => {
            console.log(userFind);
            res.render("auth/updateUser", { user: userFind });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error interno del servidor');
        });
};
