const {check} = require("express-validator")

const fieldTitle = check("title")
.notEmpty().withMessage("El campo nombre es requerido").bail()
.isAlpha("es-ES").withMessage("El campo debe ser alfanumerico").bail()
.isLength({min:5,max:90}).withMessage("La longitud del nombre es incorrecto").bail()

const fielPrice = check("price")
.notEmpty().withMessage("El campo precio debe ser requerido").bail()
.isNumeric().withMessage("El valor ingresado es incorrecto").bail()

const fielDiscount = check("discount")
.isNumeric().withMessage("El campo de descuento debe ser un numero").bail()

const fielDescription = check("description")
.notEmpty().withMessage("El campo de descripcion es requerido").bail()
.isAlpha("es-ES").withMessage("El campo debe ser alfanumerico").bail()
.isLength({min:5,max:90}).withMessage("La longitud de la descripcion es incorrecto").bail()

module.exports = [fieldTitle, fielPrice, fielDiscount, fielDescription]; 