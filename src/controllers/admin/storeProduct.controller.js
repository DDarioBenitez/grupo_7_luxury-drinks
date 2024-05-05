const db = require("../../database/models")

module.exports = (req, res) => {       
   const {name, price, discount, category, description} = req.body;

   db.product.crate({
      name: name.trim(),
      price: +price,
      discount: +discount,
      description: description.trim(),
      category: +category,
      image: "default.jpg",
      available: true
   })
   .then((product) => {
      res.redirect("/admin/lista-de-productos")
   })

}