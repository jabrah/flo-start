const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const api = require('./routes/api');

const app = express();

const DB_URL = "mongodb://localhost:27017/flo";
// =============================================================================
// ##### Connect to MongoDB through Mongoose
// mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);
mongoose.connection.on('error', (err) => {
  console.error(error);
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
