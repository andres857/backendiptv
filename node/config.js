// config.js
require('dotenv').config();
module.exports = {  
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,

  URLAPI: process.env.URLAPI,
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
}