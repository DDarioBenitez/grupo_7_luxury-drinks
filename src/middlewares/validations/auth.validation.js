const { body } = require("express-validator");
const { loadData } = require("../../database");
const { compareSync } = require("bcryptjs");
const db = require("../../database/models");

const fielMailDefault = body("email")
.notEmpty().withMessage("Campo requerido").bail()
.isEmail().withMessage("formato no valido").bail()

const fieldMail = fielMailDefault
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

const loginEmail = body("emailLogin")
    .notEmpty().withMessage("Campo requerido").bail()
    .isEmail().withMessage("Formato invalido").bail()
    .custom(async (value, { req }) => {
        try {
            const userFind = await db.user.findAll({
                where: { email: value.trim() }
            })
            if (!userFind.length) {
                throw new Error("El email ingresado no está registrado!")
            }
        } catch (error) {
            throw error
        }
    });

const fieldPassword = body("password")
.notEmpty().withMessage("Campo requerido").bail()
.custom((value,{req})=>{
    const users = loadData("users")
    const isValidPass = compareSync(password, userFind.password)
    if(!isValidPass){
        throw new Error("Contraseña invalida")
    }
})



module.exports = {
    registerValidation:[fieldMail,fielPasswordRegister],
    LoginValidation:[loginEmail,fieldPassword]
}