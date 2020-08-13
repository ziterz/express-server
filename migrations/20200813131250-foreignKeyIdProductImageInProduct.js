'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Products', {
      fields: ['idProductImage'],
      type: 'foreign key',
      name: 'foreign_key_idProductImage',
      references: { //Required field
        table: 'ProductImages',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Products', 'foreign_key_idProductImage')
  }
};
