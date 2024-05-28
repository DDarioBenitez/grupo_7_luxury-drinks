const { Op } = require("sequelize");
const db = require("../../../database/models");
module.exports = async (req, res) => {

    try {
            const [order, isCreate] = await db.Order.findOrCreate({
                where: {
                    [Op.and]: [
                        {
                            userId: 11 //req.session?.userLogin?.id
                        },
                        {
                            state: "completed",   
                        }
                    ]
                },
                defaults: {
                    userId: 11 //req.session?.userLogin?.id,

                }
            });

            const statusCode = isCreate ? 201 : 200;
            res.status(statusCode).json({
                ok: true,
                data: order
            })
        
    } catch(err){
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}

    //res.status(200).json({ ok: true, msg: "ok" })
