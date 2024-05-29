const db = require("../../../database/models")
module.exports = (req, res) => {
    const {page} = req.query
    db.product.paginate({
        page:+page,
        paginate:2,
        include: ["category"]
    })
    .then(({docs: products , pages , total}) => {
        res.status(200).json({
            ok:true,
            data:products,
            pages,
            total
          })
    }).catch(err => {
        res.status(500).json({
            ok:false,
            msg:err.message
        })
    })

}