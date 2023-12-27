'use strict';

import { Model } from 'sequelize';
import { v4 } from 'uuid';
import crypto from 'crypto';
import enums from '../constants/enums';
import PasswordManager from '../common/PasswordManager';

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

    toJSON(user) {
      delete user['id'];
      delete user['createdAt'];
      delete user['updatedAt'];
      return user;
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    exId: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    msnid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userRole: {
      type: DataTypes.ENUM(Object.values(enums.userRole)),
      field: 'user_role',
      allowNull: false,
      defaultValue: enums.userRole.user
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    hooks: {
      beforeValidate: async (user, options) => {
        user.exId = v4();
        user.password = await new PasswordManager().hash(user.password ? user.password : crypto.randomBytes(32).toString('hex'));
        if (!user.username) {
          user.username = `${user.email.split('@')[0]}@${user.msnid.split(user.msnid.length - 1)}`
        }
      }
    }
  });
  return User;
};