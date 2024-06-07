const db = require("../../database/models")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = (req, res)=>{
   const categoryId = req.params.categoryId
    db.product.findByPk(categoryId,{
        include: ["category"]
    })  
    .then((products) => {
        res.render("products/categoryProduct", {products, toThousand})
    })
}