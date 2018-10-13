const express = require('express');
const mongoose = require('mongoose');

const app = express();

// db config
const db = require('./config/keys').mongoURI;

// connect to mongodb 
mongoose
    .connect(db)
    .then(() => console.log('MongoDb connected!'))
    .catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('hello!!s');
});


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});