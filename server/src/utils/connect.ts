// database connection
const postgres = require('postgres');
require('dotenv').config();

const {DATABASE_URL} = process.env;
const SQL = postgres(DATABASE_URL,{ssl : 'require'})


export default SQL