const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();
const users = require('./routes/users');

const port = 3000;

const mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 100,
    host: 'dvwebb.mah.se',
    user: 'ae2332',
    password: 'GuldFisk1337',
    database: 'ae2332'
});

mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database'+ config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Error: Database ' +err);
});

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

exports.handleMySql = function({}, callback){
  pool.getConnection(function(err,connection){
    if (err) {
      console.log(err);
        return;
    }
    console.log('connected as id ' + connection.threadId);

    connection.query('SELECT * FROM `mah` WHERE `Username` = "ae2332"', function(err, results, fields){

      connection.release();
      if(err) {
        console.log(err);
      }else{
        callback(null, results);
      }
    });
    connection.on('error', function(err) {
      console.log(err);
        return;
    });
  });
}

//start server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
