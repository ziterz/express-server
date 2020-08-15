'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Status extends Model {
    static associate (models) {
      Status.hasMany(models.Transaction, { foreignKey: 'idStatus' })
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