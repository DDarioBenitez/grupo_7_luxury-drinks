const productService = require("../services/productService");

module.exports = (req, res) => {
    const { id } = req.params;
    const { name, price, discount, description, category } = req.body;
    const image = req.file;
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

    productService.updateProduct(id, newData)
        .then(() => {
            res.redirect(`/detalle-de-producto/${id}`);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error interno del servidor');
        });
};