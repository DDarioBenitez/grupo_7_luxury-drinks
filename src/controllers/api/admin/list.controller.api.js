const db = require("../../../database/models")
module.exports = (req, res) => {
    
    db.product.findAll({
        include: ["category"]
    })
    .then(products => {
        res.status(200).json({
            ok:true,
            data:products
          })
    }).catch(err => {
        res.status(500).json({
            ok:false,
            msg:err.message
        })
    })

}