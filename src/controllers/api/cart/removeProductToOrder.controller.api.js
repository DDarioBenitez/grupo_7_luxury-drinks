const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");
module.exports = async (req, res) => {

    try {
        const { id: productId } = req.params;
        
        if(!productId) throw new Error("el id del producto es obligatorio");

        const [order, isCreate] = await getOrderPending(req);
        
       await db.OrderProduct.destroy({
          where:{
            orderId:order.id,
            productId
          }
        });

        res.status(200).json({
            ok: true,
            msg: "producto eliminado del carrito con exito"
         });
    } catch(err){
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}
    //res.status(200).json({ ok: true, msg: "ok" })
