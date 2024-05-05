const productService = require("../services/productService");

module.exports = {
    findAllProducts: (req, res) => {
        try {
            const products = productService.findAllProducts();
            res.render("products/products", { products });
        } catch (err) {
            console.log('Error al obtener los productos', err);
            throw new Error('Error al obtener los productos')
        }
    },

    findOneProduct: (req, res) => {
        try {
            const product = productService.getProductById(req.params.id);
            res.render("products/productDetail", { product });
        } catch (err) {
            console.log('Error al obtener el producto', err);
            throw new Error('Error al obtener el producto', err)
        }
    }
}