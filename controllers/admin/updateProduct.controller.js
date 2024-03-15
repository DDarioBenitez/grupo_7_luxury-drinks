const { loadData } = require("../../data");

module.exports = (req, res)=>{
    const {id} = req.params
    const {name,price,discount,description,category} = req.body;


    const products = loadData()
    const productsMapped = products.map(p => {
        if(p.id === +id){
            const productsUpdate = {
                ...p,
                name: name.trim(),
                price: +price,
                discount: +discount,
                description: description.trim(),
                category: category?.trim()
            };
            return productsUpdate
        }
        return p
    })

    saveData(productsMapped)


    res.redirect(`/products/detalle-de-producto/${id}`)
}