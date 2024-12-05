const User = require('./Models/user'); // Importera din Sequelize-modell

async function createUser(name, email) {
  return await User.create({ name, email });
}

async function getAllUsers() {
  return await User.findAll();
}

module.exports = { createUser, getAllUsers };