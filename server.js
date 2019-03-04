// require dependencies
const dotenv = require("dotenv").config();
const express = require("express");
// set up port
const PORT = process.env.PORT || 7777;

const app = express();
// serve all static files from the public directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
require("./routes/html-routes")(app);
require("./routes/omdb-routes")(app);

//listener
app.listen(PORT, () => {
    console.log(`Server listening on : http://localhost:${PORT}`);
});