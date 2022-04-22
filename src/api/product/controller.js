const repo = require('./repository');

const getProduct = async (req, res) => {
  try {
    const data = await repo.getProduct();
    if (data != "") {
      res.status(200).send(data);
    } else {
      res.status(500).send({message: 'No hay productos'});
    }
    
  } catch (error) {
    res.send(error);
  }
};

const postProduct = async (req, res) => {
  try {
    const {
      numeroDeLote,
      nombreProducto,
      precioProducto,
      cantidadDisponibleProducto,
      idUser
    } = req.body;

    const data = await repo.postProduct(
      numeroDeLote,
      nombreProducto,
      precioProducto,
      cantidadDisponibleProducto,
      idUser
    );
    if (data != "") {
      res.status(200).send({ message: 'Transacción Exitosa, se agrego un nuevo producto' });
    } else {
      res.status(500).send({ message: data.sqlMessage });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const putProduct = async (req, res) => {
  try {
    const {
      numeroDeLote,
      nombreProducto,
      precioProducto,
      cantidadDisponibleProducto,
      idUser,
      idProduct
    } = req.body;

    const data = await repo.putProduct(
      numeroDeLote,
      nombreProducto,
      precioProducto,
      cantidadDisponibleProducto,
      idUser,
      idProduct
    );
    if (data != "") {
      res.status(200).send({ message: 'Transacción Exitosa, producto actualizado correctamente' });
    } else {
      res.status(500).send({ message: data.sqlMessage });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {
      idProduct
    } = req.params;

    const data = await repo.deleteProduct(
      idProduct
    );
    if (data != "") {
      res.status(200).send({ message: 'Transacción Exitosa, se ha eliminado el producto' });
    } else {
      res.status(500).send({ message: "No se encntro Producto"});
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getProduct, postProduct, putProduct, deleteProduct };
