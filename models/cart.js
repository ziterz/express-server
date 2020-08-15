'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
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