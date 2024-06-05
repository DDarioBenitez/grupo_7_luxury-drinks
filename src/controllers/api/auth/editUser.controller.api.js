const db = require("../../../database/models");

module.exports = (req, res) => {
    const { id } = req.params;

    db.user.findAll({ 
        where: { id: id }
    })
    .then(user => {
        if (user) {
            res.status(200).json({
                ok: true,
                data: user
            });
        } else {
            res.status(404).json({
                ok: false,
                msg: "Usuario no encontrado"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            ok: false,
            msg: err.message
        });
    });
};
