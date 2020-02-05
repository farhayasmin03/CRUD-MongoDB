const Product = require('../module/product.model')

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
}

exports.create = function (req, res, next) {

    let product = new Product({
        name: req.body.name,
        price: req.body.price
    })
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
}

exports.product_details = function (req, res, next, ) {
    Product.find(function (err, data) {
        if (err) return next(err);
        res.send(data);
    })
}

exports.product_update = function (req, res, next) {
    Product.findOneAndUpdate(req.query.id, {
        $set: {
            name: req.body.name,
            price: req.body.price
        }
    }, function (err, product) {
        if (err) return next(err);
        res.send({
            message: "product updated",
            data: product
        });
    });
    console.log(req.body.name)
}