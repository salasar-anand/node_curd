const productService = require("../services/products.services");
const upload = require("../middleware/upload");

exports.create = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            next(err);
        } else {
            const url = req.protocol + "://" + req.get("host");
            const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : '';

            var model = {
                productName: req.body.productName,
                productDescription: req.body.productDescription,
                productPrice: req.body.productPrice,
                productImage: path != "" ? url + '/' + path : "",
            };

            productService.createProducts(model, (error, results) => {
                if (error) {
                    return next(error);
                } else {
                    return res.status(200).send({
                        message: "Success",
                        data: results
                    })
                }
            })
        }
    })
};



exports.findAll = (req, res, next) => {

    var model = {
        productName: req.query.productName,

    };

    productService.getProducts(model, (error, results) => {
        if (error) {
            return next(error);
        } else {
            return res.status(200).send({
                message: "Success",
                data: results
            })
        }
    })
};



exports.findOne = (req, res, next) => {

    var model = {
        productId: req.params.id,

    };

    productService.getProductById(model, (error, results) => {
        if (error) {
            return next(error);
        } else {
            return res.status(200).send({
                message: "Success",
                data: results
            })
        }
    })
};




exports.update = (req, res, next) => {
    upload(req, res, function (err) {
        if (err) {
            next(err);
        } else {
            const url = req.protocol + "://" + req.get("host");
            const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : '';

            var model = {
                productId: req.params.id,
                productName: req.body.productName,
                productDescription: req.body.productDescription,
                productPrice: req.body.productPrice,
                productImage: path != "" ? url + '/' + path : "",
            };

            productService.updateProduct(model, (error, results) => {
                if (error) {
                    return next(error);
                } else {
                    return res.status(200).send({
                        message: "Success",
                        data: results
                    })
                }
            })
        }
    })
};



exports.delete = (req, res, next) => {

    var model = {
        productId: req.params.id,

    };

    productService.deleteProduct(model, (error, results) => {
        if (error) {
            return next(error);
        } else {
            return res.status(200).send({
                message: "Success",
                data: results
            })
        }
    })
};


