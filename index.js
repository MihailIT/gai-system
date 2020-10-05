const express = require('express');
const server = express();
const mngs = require('mongoose');
const REQ_Handler = require('./services/mongodb_conn'); // Service for connection to mongodb cluster

// Routes Middleware
const api = require('./routes/api')
const db_handler = new REQ_Handler('mihail', 'root', 'dtps');
server.use('/api', api)

db_handler.new_dtp('Nevynnomyssk', 'interract', 20);
server.listen(3000, ()=>{console.log('NodeJS server has been running on localhost:3000')});