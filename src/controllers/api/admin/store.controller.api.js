const db = require("../../../database/models")
module.exports = (req, res) => {
    const {title,price,discount,description,category} = req.body;
    db.product.crate({

      title: title.trim(),
      price: +price,
      discount: +discount,
      description: description.trim(),
      categoryId: +category,
      imagePrincipal: image?.length ? 
      image?.filname : "default-avatar-icon-of-social-media-user-vector.jpg",

    })
    .then(() => {
      res.status(201).json({
        ok:true,
        msg:"producto creado con exito"
      })
    }).catch(err => {
        res.status(500).json({
            ok:false,
            msg:err.message
        })
    })
}