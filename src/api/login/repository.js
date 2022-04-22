
const knex = require('../../database');

const getAdminLogin = async (emailUser, password) => {
    const query = await knex
        .select(
            'idUser',
            'nombreUser',
            'nombreRole'
        )
        .from('user')
        .join('role', 'fkRole', 'idRole')
        .where({
            emailUser: emailUser,
            password: password
        });
    return query;
};

module.exports = { getAdminLogin };
