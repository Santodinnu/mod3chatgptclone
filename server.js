const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");

const app = express();

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
