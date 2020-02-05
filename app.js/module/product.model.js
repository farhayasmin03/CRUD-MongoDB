const mongoose = require('mongoose')
var Schema = mongoose.Schema;
let productSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type: Number,
        required: true
    },
})

//export the schema
module.exports = mongoose.model('Product', productSchema)