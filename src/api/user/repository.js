const knex = require('../../database');

const postUser = async (
  nombreUser,
  emailUser,
  password,
  fkRole) => {
  return knex('user')
    .insert({
      nombreUser:nombreUser,
      emailUser:emailUser,
      password:password,
      fkRole: fkRole
    })
};

module.exports = { postUser };
