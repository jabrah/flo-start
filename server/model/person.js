const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  moo: {type: String, unique: true},
  firstName: String,
  lastName: String,
  address: String,
  zipCode: Number,
  phone: Number,
  employer: String,
  iProvider: String,
  iPlanNum: String
});

const Person = mongoose.model('Person', personSchema, 'people');

module.exports = Person;
