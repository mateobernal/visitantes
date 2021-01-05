const Visitor = require('../models/Visitor');



const form = (req, res) => {
    res.render('form')
    //res.send('La ruta funciona');
};


const userData = async (req, res) => {
        const visitor = new Visitor({
           name: req.query.name
        })
        console.log('este es el req.params',req.query.name)
    await visitor.save();
    res.send(`<h1>El visitante fue almacenado con éxito</h1>`);
    console.log(visitor);
};



module.exports = { form, userData };