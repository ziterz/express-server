'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class SubCategory extends Model {
    static assosiate (models) {
      SubCategory.belongsTo(models.Category, { foreignKey: 'idCategory' })
      SubCategory.hasMany(models.Product, { foreignKey: 'idSubCategory' })
    }
  }
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