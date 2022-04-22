const repo = require('./repository');


const postCompra = async (req, res) => {
  try {
    const arreglo = req.body;
    const newFactura = await repo.postFactura(arreglo[0].fkUser)
    const [getFactura] = await repo.getFactura(arreglo[0].fkUser);
    let fkFactura = getFactura.idFactura;
    var valorFactura = 0;
    arreglo.forEach(async element => {
      let cantidad=element.cantidad
      let fkProducto=element.fkProducto
      
      let [vProducto] = await repo.valorProducto(fkProducto)
      let valorProducto = vProducto.precioProducto
      valorFactura = valorFactura+(valorProducto * cantidad)

      let data = await repo.postCompra(
        cantidad,
        fkProducto,
        fkFactura,
      );
      let putfactura = await repo.putFactura(fkFactura, valorFactura)
    });
    
    if (arreglo) {
      res.status(200).send({ message: 'Transacción Exitosa, nueva compra' });
    } else {
      res.status(500).send({ message: data.sqlMessage });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const getFacturaTotal = async (req, res) => {
  try {
    const {idFactura} = req.params;
    const data = await repo.getFacturaTotal(idFactura);
    if (data != "") {
      res.status(200).send({ data});
    } else {
      res.status(500).send({ message: "No se encntro factura"});
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const historialProductosCompraUsuario = async (req, res) => {
  try {
    const {idUser} = req.params;
    const data = await repo.historialProductosCompraUsuario(idUser);
    if (data != "") {
      res.status(200).send({ data});
    } else {
      res.status(500).send({ message: "No se encntraron productos"});
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { postCompra, getFacturaTotal, historialProductosCompraUsuario };
