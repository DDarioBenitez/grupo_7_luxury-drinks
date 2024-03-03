const path = require('path');
const products = require(path.join(__dirname, '../../data/products.json'));
module.exports = (req, res) => {
    res.render("admin/listProducts", {
        products
    });
}