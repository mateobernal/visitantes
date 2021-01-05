const { Router } = require('express');
const userRoutes = Router();
const anonimo = require('../helpers/helpers')

const { form, userData } = require('../controllers/controllers');


//userRoutes.get('/', anonimo, form);

userRoutes.get('/', anonimo, userData);


module.exports = userRoutes;