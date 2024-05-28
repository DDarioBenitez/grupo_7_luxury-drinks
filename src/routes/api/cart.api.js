const router = require("express").Router()
const { getOrder } = require("../../controllers/api/cart");

router.get("/" , getOrder)
//router.patch("/add-product", addCart)
//router.patch("/more-quantity",moreQuantity)
//router.patch("/less-quantity",lessQuantity)
//router.delete("/remove-product", deleteCart)




module.exports = router