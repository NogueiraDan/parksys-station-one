const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDatabase = require("./connection/db.config");
const app = express();

connectDatabase();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
