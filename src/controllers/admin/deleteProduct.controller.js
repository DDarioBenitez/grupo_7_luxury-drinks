const productService = require("../services/productService");
const path = require("path");
const fs = require("fs");

module.exports = (req, res) => {
    const { id } = req.params;
    productService.deleteProduct(id)
        .then(() => {
            const productDestroy = productService.getProductById(id);
            if (productDestroy && productDestroy.image) {
                const pathFile = path.join(__dirname, "/public/images/products", productDestroy.image);
                fs.unlinkSync(pathFile); // Elimina el archivo de imagen del disco
            }
            res.redirect('/admin/lista-de-productos');
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error interno del servidor');
        });
};
