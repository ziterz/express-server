'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Role extends Model {
    static assosiate (models) {
      User.hasMany(models.User, { foreignKey: 'idUser'} )
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