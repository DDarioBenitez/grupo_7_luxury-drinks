const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");

module.exports = async (req, res) => {
    try {

    const [order, isCreate] = await getOrderPending(req);

    }catch(error){

    }



}