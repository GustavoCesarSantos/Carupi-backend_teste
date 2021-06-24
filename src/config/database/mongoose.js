const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  user: process.env.DBUSER,
  pass: process.env.DBPASSWORD,
  authSource: process.env.AUTH_SOURCE,
};

mongoose.connect(process.env.DATABASE, options);
mongoose.Promise = global.Promise;

mongoose.connection
  .on('connected', () => {
    console.log('Mongoose connected.');
  })
  .on('error', (err) => {
    console.log(`Mongoose connection error: ${err}.`);
  })
  .on('disconnected', () => {
    console.log('Mongoose connection failed.');
  });
