'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    idRole: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'ID Role is required'
        },
        notEmpty: {
          args: true,
          msg: 'ID Role is required'
        },
        isInt: {
          args: true,
          msg: 'ID Role has to be an integer'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Username is required'
        },
        notEmpty: {
          args: true,
          msg: 'Username is required'
        },
        len: {
          args: [6],
          msg: 'Username has minimal 6 characters'
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'First name only contains alphabeth'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Last name only contains alphabeth'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Email is required'
        },
        notEmpty: {
          args: true,
          msg: 'Email is required'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password is required'
        },
        notEmpty: {
          args: true,
          msg: 'Password is required'
        },
        len: {
          args: [6],
          msg: 'Password has minimum 6 characters'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Password only contains alphabeth and numbers'
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        isValidPhoneNumber(value) {
          if (value) {
            const pattern = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g
            if (!pattern.test(value)) {
              throw new Error('Invalid phone number')
            }
          }
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};