//name of database: portfolio-db

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio-db');

module.exports = mongoose.connection;
