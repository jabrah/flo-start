const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

const Person = require('../model/person');
const uuid = require('uuid/v1');

router.get('/', (req, res) => res.send('API works :)'));

router.get('/posts', (req, res) => {
  log("Trying to moo");
  axios.get(`${API}/posts`)
  .then(posts => res.status(200).json(posts.data))
  .catch(error => res.status(500).send(error));
});

// Get all people
router.get('/data', (req, res) => {
  log(" >> GET /data (Getting all data)");
  Person.find((err, people) => {
    if (err) {
      handleError(err, res);
    }
    res.status(200).json(people);
  })
});

// Get a person
router.get('/data/:id', (req, res) => {
  log(" >> GET /data/id " + JSON.stringify(req.params));
  res.status(200).json({id:-1, firstName: "Mittens", lastName: "Kittens"});
});

// Add person
router.post('/data', (req, res, next) => {
  log(" >> POST /data " + JSON.stringify(req.body));
  req.body.id = uuid();
  let noob = new Person(req.body);
  noob.save((err, theSaved) => {
    if (err) {
      handleError(err, res);
    }
    res.status(200).send(noob);
  });
});

// Update person
router.put('/data/:id', (req, res, next) => {
  log(" >> PUT /data/:id " + JSON.stringify(req.params) + "\n\t" + JSON.stringify(req.body));
  res.status(200).send(req.body);
});

// Delete person
router.delete('/data/:id', (req, res) => {
  log(" >> DELETE /data/id " + req.params.id);
  res.status(200).send(req.body);
});

// Useful to separate out if we want to disable logging
function log(msg) {
  console.log(msg);
}

function handleError(error, res) {
  console.error("ERROR::" + error);
  res.status(500).send("Server error.");
}

module.exports = router;
