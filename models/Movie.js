const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    ratings: {
        type: Array,
        required: true
    },
    runtime: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    rated: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;