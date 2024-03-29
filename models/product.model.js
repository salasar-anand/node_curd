const mongoose = require("mongoose");

const product = mongoose.model(
    "products",
    mongoose.Schema({
        productName: String,
        productDescription:String,
        productPrice: Number,
        productImage: String
    },
    {
        timestamp: true,
    }
    )
);


module. exports  = {product}