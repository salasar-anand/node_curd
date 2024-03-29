const prductsController = require("../controllers/products.controller");
const express = require( "express");
const router = express.Router();

router.post("/products", prductsController.create);
router.get("/products", prductsController.findAll);
router.get("/products/:id", prductsController.findOne);
router.put("/products/:id", prductsController.update);
router.delete("/products/:id", prductsController.delete);


module.exports = router;