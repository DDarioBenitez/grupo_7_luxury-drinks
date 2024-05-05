const productService = require("../services/productService");

module.exports = (req, res) => {
    const { id } = req.params;
    productService.getProductById(id)
        .then(productFind => {
            res.render("admin/editProduct", { product: productFind });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error interno del servidor');
        });
};