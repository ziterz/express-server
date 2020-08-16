'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.User, { foreignKey: 'idRole' });
    }
  }
  Role.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Role is required'
        },
        notEmpty: {
          args: true,
          msg: 'Role is required'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};
