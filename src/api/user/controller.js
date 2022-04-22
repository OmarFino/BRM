const repo = require('./repository');


const postUser = async (req, res) => {
  try {
    const {
      nombreUser,
      emailUser,
      password,
      fkRole
    } = req.body;

    const data = await repo.postUser(
      nombreUser,
      emailUser,
      password,
      fkRole
    );
    if (data != "") {
      res.status(200).send({ message: 'Transacción Exitosa' });
    } else {
      res.status(500).send({ message: data.sqlMessage });
    }
  } catch (error) {
    res.status(500).send({ message: error.sqlMessage });
  }
};

module.exports = { postUser };
