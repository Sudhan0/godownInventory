const express =require('express');
const route = express.Router();
const godownController = require('../GodownController/godownController')

route.get('/', godownController.getAllGodowns);
route.get('/getByValue',godownController.getByValue )
route.post('/add', godownController.godownAdd);
route.get('/encrypt',godownController.encryptData)
route.get('/decrypt',godownController.decryptData)
module.exports = route;
