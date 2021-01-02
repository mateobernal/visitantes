const anonimo = (req, res, next) => {
    if (!req.params.name){
        req.params.name = 'Anónimo'
    }

    next();
}


module.exports = anonimo;