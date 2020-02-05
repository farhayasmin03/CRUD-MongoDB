const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes=require('./app.js/routes/router')
app.use('/api', routes);
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/product_data')
var db = mongoose.connection

//handling error
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('we are connected')
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
module.exports = app;