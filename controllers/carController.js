const CarModel = require("../models/carModel");
const UserModel = require("../models/userModel");

const createCar = (req, res) => {
  console.log(req.body);
  const car = new CarModel({
    marca: req.body.marca,
    modelo: req.body.modelo,
    ano: req.body.ano,
    cpfProprietario: req.body.cpfProprietario,
  });

  car.save();
  res.status(201).json({
    status: "Success",
    data: {
      car,
    },
  });
};

const listCarByUser = async (req, res) => {
  const userCars = await CarModel.find({ cpfProprietario: req.params.id });
  console.log(`Cars: ${userCars}`);
  res.status(200).json({
    status: "Ok",
    data: {
      userCars,
    },
  });
};

module.exports = {
  createCar,
  listCarByUser,
};
