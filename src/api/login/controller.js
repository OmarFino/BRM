const repo = require('./repository');
const jwt = require('jsonwebtoken');

const getAdminLogin = async (req, res) => {
  try {
    const { emailUser, password } = req.body;
    const [data] = await repo.getAdminLogin(emailUser,password);
    if (!data == []) {
        const token = await jwt.sign(
          { data: data },
          process.env.KEY_SECRET,
          {}
        );
        res.status(200).json({ ...data, token });
      
    } else {
      res.status(500).send({ Message: 'Credenciales Invalidas' });
    }
  } catch (error) {
    res.status(500).send({ Message: error.sqlMessage });
  }
};

module.exports = { getAdminLogin };