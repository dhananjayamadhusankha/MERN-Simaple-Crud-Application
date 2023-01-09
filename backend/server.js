const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();

//DB connection import
const { connectionDB } = require('./utils/connection');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// import router
const studentsRouter = require('./routes/student.routes');

// create api routes
app.use('/api/student', studentsRouter);

const PORT = process.env.PORT || 8070;

app.listen(PORT, () => {
    console.log(`listening on port : ${PORT}`);
    connectionDB();
})