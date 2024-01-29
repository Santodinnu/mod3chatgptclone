const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//routes path
const authRoutes = require("./routes/authRoutes");

//dotenv
dotenv.config();

//mongo connection
connectDB();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
// app.use(errorHandler);


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(
        `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan.white);
});
