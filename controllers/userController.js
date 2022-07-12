const UserModel = require("../models/userModel");

const home = (req, res) => {
  console.log(req.body);
  res.send("<h2>Pagina Home</h2>");
};

const createUser = (req, res) => {
  console.log(req.body);
  const user = new UserModel({
    nome: req.body.nome,
    email: req.body.email,
    cpf: req.body.cpf,
    nascimento: req.body.nascimento,
  });

  user.save();
  res.status(201).json({
    status: "Success",
    data: {
      user,
    },
  });
};

const listUser = async (req, res) => {
  const users = await UserModel.find({}).lean().exec();
  try {
    res.status(200).json({
      status: "Sucesso",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: error,
    });
  }
};

const findUser = async (req, res) => {
  const user = await UserModel.findOne({ nome: req.params.nome });
  console.log(`User: ${user}`);
  res.status(200).json({
    status: "Ok",
    data: {
      user,
    },
  });
};

module.exports = {
  home,
  createUser,
  listUser,
  findUser,
};
