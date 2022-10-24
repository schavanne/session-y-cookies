var express = require('express');
var router = express.Router();
const formValidation = require('../validation/formValidation');
const indexController = require('../controllers/indexController');
/* GET home page. */
router
      .get('/', indexController.index)
      .post('/form', formValidation,indexController.form)
      .post('/forgetColor',indexController.forgetColor)
      .get('/saludos', indexController.saludos)

module.exports = router;
