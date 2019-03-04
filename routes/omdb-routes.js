const db = require("../models");
const axios = require("axios");
const keys = require("../config/keys");

module.exports = (app) => {

    app.get("/omdb", (req, res) => {
        // when the find button is clicked, execute the findMovie function
        const omdb_Key = keys.omdb.omdb_Key;
        let movieName = "spaceballs";
        const queryURL = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=${omdb_Key}`;
        axios.get(queryURL)
            .then((result) => {
                console.log(result.data);
                res.json(JSON.stringify(result));
            })
            .catch((err) => {
                console.log(err);
            })
    })

};