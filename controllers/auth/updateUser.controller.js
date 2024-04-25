const { validationResult } = require("express-validator");
const { loadDataUser, saveDataUser } = require("../../data");
const bcrypt = require("bcryptjs");

module.exports = (req, res)=>{
    const errors = validationResult(req)
    console.log(errors)
    if(errors.isEmpty()){
    
        const {id} = req.params;

        const {name, email, lastname, password} = req.body;
        const users = loadDataUser("users");
        const usersMapped = users.map(u => {
            if(u.id == +id){
                const userUpdate = {
                    id: u.id,
                    name: name,
                    lastname: lastname, 
                    email: email,
                    password: password.trim().length > 1 ? password : u.password,
<<<<<<< HEAD
                    role: u.role
=======
                    rol: u.role
>>>>>>> develop
                }
                
                return userUpdate
            }
            
            return u
        })
        saveDataUser(usersMapped)
        res.redirect('/');
    }
    
<<<<<<< HEAD
    res.render("auth/perfil",{user: req.body, errors: errors.mapped()})
=======
    res.render("auth/updateUser",{user: req.body, errors: errors.mapped()})
>>>>>>> develop
}