const knex = require('../../database');

const getProduct = async () => {
  const query = await knex
    .select(
      'idProduct',
      'numeroDeLote',
      'nombreProducto',
      'precioProducto',
      'cantidadDisponibleProducto')
    .from('product')
    .where({ stateProducto: 'A'})
  return query;
};

const postProduct = async (
  numeroDeLote,
  nombreProducto,
  precioProducto,
  cantidadDisponibleProducto,
  idUser) => {
  return knex('product')
    .insert({
      numeroDeLote: numeroDeLote,
      nombreProducto: nombreProducto,
      precioProducto: precioProducto,
      cantidadDisponibleProducto: cantidadDisponibleProducto,
      user_idUser: idUser
    })
};

const putProduct = async (
  numeroDeLote,
  nombreProducto,
  precioProducto,
  cantidadDisponibleProducto,
  idUser,
  idProduct) => {
  return knex('product')
    .update({
      numeroDeLote: numeroDeLote,
      nombreProducto: nombreProducto,
      precioProducto: precioProducto,
      cantidadDisponibleProducto: cantidadDisponibleProducto,
      user_idUser: idUser
    })
    .where({ idProduct: idProduct })
};

const deleteProduct = async (
  idProduct) => {
  return knex('product')
    .update({
      stateProducto: 'I',
    })
    .where({ idProduct: idProduct })
};

module.exports = { getProduct, postProduct, putProduct, deleteProduct };
