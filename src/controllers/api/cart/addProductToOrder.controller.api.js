const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");
module.exports = async (req, res) => {

    try {
        const { id: productId } = req.params;

        if(!productId) throw new Error("el id del producto es obligatorio");

       const [order, isCreate] = await getOrderPending(req);

       await db.OrderProduct.create({   
            orderId:order.id,
            productId
        });

        res.status(201).json({
            ok: true,
            msg: "producto agregado al carrito con exito"
         });
    } catch(err){
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}
    //res.status(200).json({ ok: true, msg: "ok" })
