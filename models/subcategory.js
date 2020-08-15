'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SubCategory.init({
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Category is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID Category is required'
        },
        isInt: {
          args: true,
          msg: 'ID Category has to be an integer'
        }
      }
    },
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
    image: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Image is required'
        },
        notEmpty: {
          args: true,
          msg: 'Image is required'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};