require("dotenv").config();
const axios = require("axios");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  omdbSearch: function (req, res) {
    const omdbKey = process.env.omdb_Key;
    axios.get(`http://www.omdbapi.com/?t=${req.body.search}&y=&plot=short&apikey=${omdbKey}`, (req, res))
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
  },
  findAll: function(req, res) {
    db.Movie
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Movie
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Movie
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}; 


// module.exports = (app) => {

//   app.post("/api/movies", (req, res) => {
//       if (typeof req.body.movieTitle === "undefined") {
//           res.status(400).json({ error: "missing parameter movie search", data: null})
//           return;
//       }
     
//       const queryURL = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=${omdbKey}`;
//       axios.get(queryURL)
//           .then((result) => {
//               res.json(result.data);
//           })
//           .catch((err) => {
//               console.log(err);
//           })
//   })

// };