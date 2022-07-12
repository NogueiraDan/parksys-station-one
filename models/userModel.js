const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    nascimento: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
