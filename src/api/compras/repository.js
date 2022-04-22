const knex = require('../../database');

const postFactura = async (idUser) => {
  return knex('factura')
    .insert({
      fkUser: idUser
    })
};

const getFactura = async (idUser) => {
  return knex('factura')
    .select('idFactura')
    .orderBy('idFactura', 'desc')
    .limit(1)
    .where({ fkUser: idUser })
};

const valorProducto = async (fkProducto) => {
  return knex('product')
    .select('precioProducto')
    .where({ idProduct: fkProducto })
};

const postCompra = async (
  cantidad,
  fkProducto,
  fkFactura,) => {
  return knex('compras')
    .insert({
      cantidad: cantidad,
      fkProducto: fkProducto,
      fkFactura: fkFactura,
    })
};

const putFactura = async (fkFactura, valorFactura) => {
  return knex('factura')
    .update({
      valorFactura: valorFactura
    })
    .where({ idFactura: fkFactura })
}

const getFacturaTotal = async (idFactura) => {
  return knex('factura')
    .select(
      'nombreProducto',
      'precioProducto',
      'cantidad',
      'fechaFactura',
      'valorFactura')
    .join('compras', 'idFactura', 'fkFactura')
    .join('product', 'fkProducto', 'idProduct')
    .where({ idFactura: idFactura })
};

const historialProductosCompraUsuario = async (idUser) => {
  return knex('factura')
    .select(
      'nombreProducto',
      'precioProducto',
      'cantidad')
    .join('compras', 'idFactura', 'fkFactura')
    .join('product', 'fkProducto', 'idProduct')
    .where({ fkUser: idUser })
};

module.exports = {
  postFactura,
  postCompra,
  getFactura,
  valorProducto,
  putFactura,
  getFacturaTotal,
  historialProductosCompraUsuario
};
