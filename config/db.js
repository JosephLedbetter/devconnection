const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useUnifiedTopology: true });
    console.log('message connect successfully...');
  } catch (err) {
    console.error(err.message);
    //exit failure with failure
    process.exit(1);
  }
};

module.exports = connectDB;
