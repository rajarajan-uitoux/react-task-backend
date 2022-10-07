const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require("path");

const errorMiddleware = require("./middleware/error");

//config
if(process.env.NODE_ENV !== "PODUCTION"){
    require('dotenv').config({path: "./config/.env"});
}

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload());

// Routes Import
const customer = require("./routes/customerRoute");

app.use('/api/v1', customer);

// app.use(errorMiddleware);

module.exports = app;