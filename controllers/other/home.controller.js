const { loadData } = require("../../data")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{
    const products = loadData();
    const productsVinos = products.filter(p => p.category === 'vinos')
    const productsEspumantes = products.filter(p => p.category === 'espumantes')
    const productsWhiskys = products.filter(p => p.category === 'whiskys')
    const productsLicores = products.filter(p => p.category === 'licores')
    const productsOtros = products.filter(p => p.category === 'otros')
    const productsPopulares = products.filter(p => p.category === 'populares')
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