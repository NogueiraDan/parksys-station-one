const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://teste:itsonlyatest@apicluster.mt7qxov.mongodb.net/parksys`,
    (error) => {
      if (error) {
        return console.log("Erro ao se conectar com o banco", error);
      }
      return console.log("Conexão com o banco bem sucedida!");
    }
  );
};

module.exports = connectDatabase;
