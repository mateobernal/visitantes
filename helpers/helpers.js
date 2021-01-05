const anonimo = (req, res, next) => {
    if (!req.query.name){
        req.query.name = 'Anónimo'
    }

    next();
}


module.exports = anonimo;