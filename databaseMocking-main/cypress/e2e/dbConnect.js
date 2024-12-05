/*
const { Sequelize } = require('sequelize');

//Setup Sequelize
const sequelize = new Sequelize({
  database: 'medie',
  username: 'root',
  password: 'SokrateS13',
  host: 'localhost',
  dialect: 'mysql', // Specificerar vilken databas vi jobbar med
});

module.exports = sequelize
*/

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
host: 'localhost',
user: 'root',
password: 'SokrateS13',
database: 'medie',
connectionLimit: 10 // maximum number of connections in the pool
});
module.exports = pool;