module.exports = (req, res) => {

    const category = require("../../database/products.json")
    res.render("admin/createProduct", {category})
}