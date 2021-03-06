const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vidGameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const VideoGame = mongoose.model("VideoGame", vidGameSchema);

module.exports = VideoGame;