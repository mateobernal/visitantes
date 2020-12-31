const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', _ => console.log('database connected'));

db.on('error', error => console.log(error));