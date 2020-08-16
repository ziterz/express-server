'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      Status.hasMany(models.Transaction, { foreignKey: 'idStatus' });
    }
  }
  Status.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name is required'
        },
        notEmpty: {
          args: true,
          msg: 'Name is required'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};
