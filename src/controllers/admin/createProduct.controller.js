const productService = require("../services/productService");
const categoryService = require("../services/categoryService");

module.exports = (req, res) => {
    const { name, price, discount, description } = req.body;
    const image = req.file;
    categoryService.getCategoryByName(req.body.category.trim())
        .then(category => {
            const newData = {
                name,
                price,
                discount,
                description,
                category
            };
            if (image) {
                newData.image = image.filename;
            }
            return productService.saveProduct(newData); // Devuelve la promesa para manejarla en la siguiente etapa
        })
        .then(() => {
            res.render("admin/createProduct", { category });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error interno del servidor');
        });
};