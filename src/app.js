const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const userRoutes = require('./routes/routes');

const app = express();


//db connect
require('./db/dbconfig');

//view engine

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.use(userRoutes);

//server

app.listen(3000, () => console.log('Listen on port 3000'));