'use strict';
const orderJSON = require("../../database/orders.json")
const productJSON = require("../../database/products.json")

const orderProductMapped = orderJSON.map(o => {
  const productMapped = o.products.map(p => {
    const productFind = productJSON.find(pdb => {
      return pdb.name === p.name
    })
    return {
    orderId:o.id,
    productId:productFind ? productFind.id : null ,
    quantity:p.quantity
  }
  });
  return productMapped
}).flat(1)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('OrderProducts', [orderProductMapped], {});
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('OrderProducts', null, {});
}
};
