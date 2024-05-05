const productService = require("../services/productService");

module.exports = (req, res) => {
    productService.findAllProducts()
        .then(products => {
            res.render("admin/listProducts", { products });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error interno del servidor');
        });
};