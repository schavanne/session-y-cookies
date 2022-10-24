module.exports = (req,res,next) => {
    if(req.cookies.rememberColor){
        req.session.form = req.cookies.rememberColor
    }
    next()
}