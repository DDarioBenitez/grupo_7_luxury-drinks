'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.product,{ 
        through: "orderproducts" , 
        foreignKey: 'orderId', 
        otherKey: 'productId',
        as: "products"
       })
       Order.belongsTo(models.user,{
        foreignKey:"userId",
        as:"user"
       }
       )
    }
  }
  Order.init({
    total: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};