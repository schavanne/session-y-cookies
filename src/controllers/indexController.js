const {validationResult} = require('express-validator');
module.exports = {
    index: (req, res) => {
        return res.render('home',req.session)
    },
    saludos: (req, res) => {
        if(!req.session.form){
            return res.redirect("/");
        }else{
            return res.render('saludos',req.session)

        }
    },
    forgetColor: (req, res) => {
        if(req.body.forgetColor){
            res.clearCookie("rememberColor");
            return res.redirect("/");
        }
    },
    form: (req, res) => {
        let errors = validationResult(req);
        errors = errors.mapped();

        const { nombre,color,edad,email} = req.body;
        if(Object.entries(errors).length === 0){
            
            req.session.form = {
                nombre,
                email,
                color,
                edad
            }
            if(req.body.rememberColor){
                res.cookie('rememberColor',req.session.form,{
                    maxAge : 1000 * 60
                })
            }
            return res.redirect("/");
        }else{
            console.log(errors)
            return res.render('./home', {
                errors,
                old: req.body,
            })
        }
    
  },
 
};