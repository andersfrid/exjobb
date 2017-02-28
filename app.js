const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database'+ config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Error: Database ' +err);
});

const app = express();
const users = require('./routes/users');

const port = 3000;

//Cors middlewear
app.use(cors());


app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
//body-parser middlewear
app.use(bodyParser.json());

app.use('/users', users);

//static files..
app.use(express.static(path.join(__dirname, 'public')));

//index route
app.get('/', (req, res) =>{
  res.send('Invalid endpoint');
});

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//start server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
