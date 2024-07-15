const db = require('../../database/models');

const bcrypt = require('bcryptjs')
const {validationResult} = require("express-validator")

module.exports = async (req, res) =>{
   try {
      const errors = validationResult(req) 
      if(errors.isEmpty()) {
         const { name, email, password } = req.body
         db.user.create({
            name: name ? name.trim() : '',
            email: email?.trim().toLowerCase(),  
            password: bcrypt.hashSync(password?.trim(), 12)
         })
         return res.redirect("/iniciar-sesion");
      } else {
         throw errors
      }
   } catch (errors) {
      return res.render("./auth/register", {
         old: req.body, 
         errors: errors.mapped()
      })
   }
};