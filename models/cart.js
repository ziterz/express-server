'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.hasMany(models.CartDetail, { foreignKey: 'idCart' });
      Cart.hasMany(models.Transaction, { foreignKey: 'idCart' });
    }
  }
  Cart.init({
    status: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Status is required'
        },
        notEmpty: {
          args: true,
          msg: 'Status is required'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
