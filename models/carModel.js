const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    marca: {
      type: String,
      required: true,
    },
    modelo: {
      type: String,
      required: true,
    },
    ano: {
      type: String,
      required: true,
    },
    cpfProprietario: {
      type: String,
      required: true,
    },
  },
  { collection: "cars" }
);

const CarModel = mongoose.model("Car", carSchema);
module.exports = CarModel;
