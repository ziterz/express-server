'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    idSubCategory: DataTypes.INTEGER,
    idProductImage: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    specification: DataTypes.STRING,
    quantity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};