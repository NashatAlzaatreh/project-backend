"use strict";

const products = (sequelize, DataTypes) =>
  sequelize.define("products", {
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    image1: { type: DataTypes.STRING, allowNull: false },
    image2: { type: DataTypes.STRING, allowNull: false },
    image3: { type: DataTypes.STRING, allowNull: false },
    inStock: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    reviews: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: false,
    },
  });

module.exports = products;
