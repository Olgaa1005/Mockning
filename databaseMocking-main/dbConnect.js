const { Sequelize } = require('sequelize');

//Setup Sequelize
const sequelize = new Sequelize({
  database: 'medie',
  username: 'root',
  password: 'SokrateS13',
  host: 'medieinsitutetdb.cjqg0ggk63v9.eu-north-1.rds.amazonaws.com',
  dialect: 'mysql', // Specificerar vilken databas vi jobbar med
});

module.exports = sequelize