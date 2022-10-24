const {check} = require('express-validator');

module.exports = [
    check('nombre')
        .notEmpty().withMessage('El nombre es obligatorio').bail(),

    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail(),
        
    check('color')
        .notEmpty().withMessage('El color es obligatorio').bail(),

    check('edad')
        .notEmpty().withMessage('Debe ingresar una edad').bail()
        .isNumeric().withMessage('Debe ser numerico').bail()
    
]