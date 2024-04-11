const { validationResult } = require("express-validator");
const { loadDataUser, saveDataUser } = require("../../data");
const bcrypt = require("bcryptjs");
const { editUser } = require(".");

module.exports = (req, res)=>{

    const errors = validationResult(req)

    if(errors.isEmpty()){
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
                    password: password.trim().length > 1 ? password : u.password
                }
                return userUpdate
            }
            return u
        })
        saveDataUser(usersMapped)
        res.redirect('/');
    }
    
    res.render("auth/updateUser", {old: req.body, errors: errors.mapped()})
}