const { loadDataUser, saveDataUser } = require("../../data");
const bcrypt = require("bcryptjs");

module.exports = (req, res)=>{
    const {id} = req.params;
    const {name, email, lastname, password} = req.body;
    const users = loadDataUser();
    const usersMapped = users.map(u => {
        if(u.id == +id){
            const userUpdate = {
                ...u,
                name: name,
                lastname: lastname, 
                email: email,
                password: password
            }
            return userUpdate
        }
        return u
    })

    saveDataUser(usersMapped)



    res.redirect('/');
}