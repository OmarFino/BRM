require('dotenv').config();
const { DB_USER, DB_PASS, DB_HOST, DB_SCHEMA } = process.env;

const connectionData = {
  client: 'mysql2',
  connection: {
    user: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    database: DB_SCHEMA,
    dateStrings: true
  }
};

module.exports = connectionData;
