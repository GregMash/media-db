// require dependencies
const dotenv = require("dotenv").config();
const express = require('express');
const path = require('path');
// set up port
const PORT = process.env.PORT || 7777;

const app = express();
// serve all static files from the public directory
app.use(express.static('public'));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/layouts/index.html"));
  });

//listener
app.listen(PORT, () => {
    console.log(`Server listening on : http://localhost:${PORT}`);
});