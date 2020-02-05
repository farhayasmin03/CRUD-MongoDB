const express = require('express');
const controller = require('../controller/product.controller')
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
router.get("/", (req, res) => {
    res.json({
        message: "welcome to crud api"
    })
})
router.get('/getData', controller.test)
router.post('/create', jsonParser, controller.create)
router.get('/get', controller.product_details)
router.put('/update', jsonParser, controller.product_update)
module.exports = router;