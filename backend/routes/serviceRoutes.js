const express = require("express");

const router = express.Router();

const serviceController =
require("../controllers/serviceController");

router.get(
  "/services",
  serviceController.getServices
);

router.post(
  "/services",
  serviceController.addService
);

router.delete(
  "/services/:id",
  serviceController.deleteService
);

module.exports = router;