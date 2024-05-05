const productService = require('../services/productService');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = (req, res) => {
    const { id } = req.params;
    const product = productService.getProductById(id);
    res.render('products/productDetail', { product: product, toThousand });
}