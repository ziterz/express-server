'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'unique_constraint_email'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'unique_constraint_email')
  }
};
