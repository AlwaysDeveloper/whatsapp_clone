'use strict';

const { ENUM } = require('../constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exId: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      msnid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      user_role: {
        type: Sequelize.ENUM(Object.values(ENUM.userRole)),
        allowNull: false,
        defaultValue: ENUM.userRole.user
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    }, { logging: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};