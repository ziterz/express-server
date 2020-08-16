'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static assosiate(models) {
      Category.hasMany(models.SubCategory, { foreignKey: 'idCategory' });
    }
  }
  Category.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title is required'
        },
        notEmpty: {
          args: true,
          msg: 'Title is required'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
