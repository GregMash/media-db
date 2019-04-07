require("dotenv").config();
const axios = require("axios");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  igdbSearch: function (req, res) {
    const igdbKey = process.env.igdb_Key;
    axios.get({
      url: `https://api-v3.igdb.com/pure`,
      headers: {
        "user-key": igdbKey
      }}, (req, res))
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
  },
  findAll: function(req, res) {
    db.VideoGame
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.VideoGame
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.VideoGame
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}; 