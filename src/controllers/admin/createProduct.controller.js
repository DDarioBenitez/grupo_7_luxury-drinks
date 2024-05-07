const productService = require("../services/productService");
const categoryService = require("../services/categoryService");

module.exports = async (req, res) => {
    try {
        const { name, price, discount, description } = req.body;
        const image = req.file;

        const category = await categoryService.getCategoryByName(req.body.category.trim().toLowerCase());
        const newData = {
            name,
            price,
            discount,
            description,
            categoryId: category.id
        };

        if (image) {
            newData.image = image.filename;
        }

        // Save product
        await productService.saveProduct(newData);

        // Render view
        res.render("admin/createProduct", { category });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error interno del servidor');
    }
};
