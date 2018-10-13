const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');



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

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});