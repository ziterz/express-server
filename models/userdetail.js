'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserDetail.init({
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID User is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID User is required'
        },
        isInt: {
          args: true,
          msg: 'ID User has to be an integer'
        }
      }
    },
    noKTP: DataTypes.STRING,
    imageKTP: DataTypes.STRING,
    noNPWP: DataTypes.STRING,
    imageNPWP: DataTypes.STRING,
    address: DataTypes.STRING,
    village: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    verify: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Verify status is required'
        },
        notEmpty: {
          args: true,
          msg: 'Verify status is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};