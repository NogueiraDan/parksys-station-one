const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const carController = require("./controllers/carController");

router.get("/", userController.home);

router.get("/list-user", userController.listUser);

router.post("/add-user", userController.createUser);

router.get("/user/:nome", userController.findUser);

router.post("/add-car", carController.createCar);

router.get("/list-cars/:id", carController.listCarByUser);

module.exports = router;
