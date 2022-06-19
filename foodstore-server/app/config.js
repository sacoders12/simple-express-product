const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

module.exports = {
    rootpath: path.resolve(__dirname, '..'),
    serviceName: process.env.SERVICE_NAME,
    
    //Konfig db
    dbHost: process.env.DB_HOST,
    dbPass: process.env.DB_PASS,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbName: process.env.DB_NAME
}