'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customers', [
      {
        name: 'John Doe',
        email: 'john@example.com',
        dob: '1990-01-01',
        address: '123 Main St, New York, NY 10030',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        dob: '1990-01-01',
        address: '123 Main St, California, NY 10031',
        gender: 'female',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {});
  },
};