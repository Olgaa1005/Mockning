const { DataTypes } = require('sequelize');
const sequelize = require('./../dbConnect')

const User = sequelize.define(
  'User',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: {type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    tableName: 'Users', // Mappas till tabellen i databasen
    timestamps: false, // Om du inte har kolumner som createdAt/updatedAt
  }
);

module.exports = User