"use strict";

const profile = (sequelize, DataTypes) =>
  sequelize.define("profile", {
    // FullName: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false },
    // age: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
  });

module.exports = profile;
