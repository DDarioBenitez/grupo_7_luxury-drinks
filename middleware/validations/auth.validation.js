const { body } = require("express-validator");
const { loadData } = require("../../data");

const fielMailDefault = body("email")
.notEmpty().withMessage("Campo requerido").bail()
.isEmail().withMessage("formato no valido").bail()

const fieldMail =fielMailDefault
.custom((value ,{req})=>{
    const users = loadData("users")
    const existUser = users.find(u => u.email === value.trim())
    if (existUser) {
        throw new Error("Ya existe un usuario con este email")
    }

return true;
})

const fielPasswordRegister = body("password")
.notEmpty().withMessage("Campo requerido").bail()
.isLength({min:8,max:16}).withMessage("Longitud invalida").bail()



module.exports = {
    registerValidation:[fieldMail,fielPasswordRegister],
    LoginValidation:[]
}