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
      return handleError(err, res);
    }
    res.status(200).json(people);
  });
});

// Get a person
router.get('/data/:moo', (req, res) => {
  log(" >> GET /data/moo " + JSON.stringify(req.params));
  Person.findOne({"moo": req.params.moo}, (err, person) => {
    if (err) {
      return handleError(err, res);
    }
    log(JSON.stringify(person));
    res.status(200).send(person);
  });
});

// Add person
router.post('/data', (req, res, next) => {
  log(" >> POST /data " + JSON.stringify(req.body));
  let noob = new Person(req.body);
  noob.moo = uuid();
  noob.save((err, theSaved) => {
    if (err) {
      return handleError(err, res);
    }
    res.status(200).json(noob);
  });
});

// Update person
router.put('/data/:moo', (req, res, next) => {
  log(" >> PUT /data/:moo " + JSON.stringify(req.params) + "\n\t" + JSON.stringify(req.body));
  Person.findOneAndUpdate({moo: req.params.moo}, req.body, (err, person) => {
    if (err) {
      return handleError(err, res);
    }
    log("Updated: " + JSON.stringify(person));
    res.status(200).json(person);
  });
});

// Delete person
router.delete('/data/:moo', (req, res) => {
  log(" >> DELETE /data/moo " + req.params.moo);
  Person.findOneAndRemove({moo: req.params.moo}, (err) => {
    if (err) {
      return handleError(err, res);
    }
    log("Successfully deleted person {moo: " + req.params.moo + "}")
    // Now get all people in DB and return
    Person.find((err, people) => {
      if (err) {
        return handleError(err, res);
      }
      res.status(200).json(people);
    });
  });
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
