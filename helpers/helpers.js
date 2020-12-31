const anonimo = (req, res, next) => {
    if (!req.body.name){
        req.body.name = 'Anónimo'
    }

    next();
}


module.exports = anonimo;