const { loadDataUser } = require("../../database");

module.exports = (req, res) => {
    const {id} = req.params;
    const users = loadDataUser()
    const userFind = users.find(u => u.id == +id)
    console.log(userFind)
    res.render("auth/updateUser", {user: userFind})

}