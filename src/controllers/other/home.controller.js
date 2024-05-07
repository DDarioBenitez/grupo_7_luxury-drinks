const productService = require("../services/productService");
const categoryService = require("../services/categoryService");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
    const products = productService.findAllProducts();
    const categorys = categoryService.getCategorys();
    const productsVinos = products.filter(p => p.category_id === categorys.find(category.name.toLowerCase() === 'vinos').id)
    const productsEspumantes = products.filter(p => p.category_id === categorys.find(category.name.toLowerCase() === 'espumantes').id)
    const productsWhiskys = products.filter(p => p.category_id === categorys.find(category.name.toLowerCase() === 'whiskys').id)
    const productsLicores = products.filter(p => p.category_id === categorys.find(category.name.toLowerCase() === 'licores').id)
    const productsOtros = products.filter(p => p.category_id === categorys.find(category.name.toLowerCase() === 'otros').id)
    const productsPopulares = products.filter(p => p.category_id === categorys.find(category.name.toLowerCase() === 'populares').id)
    res.render("other/home", {
        productsVinos,
        productsEspumantes,
        productsWhiskys,
        productsLicores,
        productsOtros,
        productsPopulares,
        toThousand
    })
}