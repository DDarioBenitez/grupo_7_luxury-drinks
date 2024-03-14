const { loadData } = require("../../data");


module.exports = (req, res)=>{
    const products = loadData();
    
    res.render("products/productDetail",{p: products})

}