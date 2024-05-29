const db = require("../../database/models")

module.exports = (req, res)=>{
    db.product.findAll({
        include: [{
            association:"category",
            attributes: ["id", "name"]
        }]
    }).then((products) => {
        res.render("products/listProductAll",
        {products}) 
    })      
}