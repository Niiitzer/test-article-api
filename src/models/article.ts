import { DataTypes } from "sequelize";
import sequelize from "../../config/db";

const Article = sequelize.define(
  "Article",
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    designation: {
      type: DataTypes.STRING
    },
    reference: {
      type: DataTypes.STRING
    },
    family: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    manufacturer: {
      type: DataTypes.STRING
    },
    manufacturer_price: {
      type: DataTypes.FLOAT
    },
    caliber: {
      type: DataTypes.STRING
    },
    storage_unity: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.FLOAT
    },
    height: {
      type: DataTypes.STRING
    },
    ean: {
      type: DataTypes.STRING
    },
    details: {
      type: DataTypes.STRING
    },
    short_term_rental: {
      type: DataTypes.NUMBER
    },
    management_fees: {
      type: DataTypes.NUMBER
    },
    createdAt: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: false
  }
);

export default Article;
