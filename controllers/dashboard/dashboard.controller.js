const path = require('path');
const products = require(path.join(__dirname, '../../public/data/products.json'));
module.exports = (req, res) => {
    res.render("dashboard", {
        products
    });
}