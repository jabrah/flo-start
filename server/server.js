const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const environment = require('dotenv');
const mongoose = require('mongoose');

const api = require('./routes/api');

const app = express();

// =============================================================================
// ##### Environment : read the .env file from ROOT
// .env is not available in the git project, must be created
environment.config();

// =============================================================================
// ##### Connect to MongoDB through Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit(1);
});
// #####
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
