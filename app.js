const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
//const port = process.env.PORT || 8080;
const port = 3000;
const app = express();
const users = require('./routes/users');

const server = app.listen(port);
const io = require('socket.io').listen(server);

/*
const mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 100,
    host: 'dvwebb.mah.se',
    user: 'ae2332',
    password: 'GuldFisk1337',
    database: 'ae2332'
});
*/
/*
let usernames = [];
let rooms = ['room1', 'room2', 'room3'];
let nbrOfUsers = 0;

io.sockets.on('connection', function(socket){
  console.log('a user connected');
  nbrOfUsers ++;

  socket.on('addPlayer', function(user){
    if(nbrOfUsers < 3){
      socket.username = user;//stors username in socket
      socket.room = 'room1';
      usernames.push(socket.username);
      socket.join('room1'); //client joins room1
      socket.emit('connectedToRoom', 'you have connected to room1'); //Send to client they have connected
      if(nbrOfUsers == 2){
        io.sockets.in(socket.room).emit('startGame', usernames);
      }
    }else{
      socket.emit('roomFull', 'room is full, try agin later');
    }
  });

  socket.on('playerMove', function(move){
    playerMove = {
      user:socket.username,
      move:move
    }
    console.log(playerMove);
    console.log(socket.username);

    io.sockets.in('room1').emit('doMoves', playerMove);
  });



  socket.on('disconnect', function(){
    console.log('user disconnected');
    nbrOfUsers --;
		usernames.splice(socket.usernames, 1);
		socket.leave(socket.room);
  });
});
*/

/*
var usernames = {};

var rooms = ['room1', 'room2', 'room3'];

io.sockets.on('connection', function(socket){
  //User is connected to io server
  console.log('user has connected');
  socket.on('adduser', function(username){
    socket.username = username;
    socket.room = 'room1';
    usernames[username] = username;
    socket.join('room1');
    socket.emit('updatechat', 'SERVER', 'you have connected to room1');
    socket.broadcast.to('room1').emit('updatechat', 'SERVER', username +' has connected to this room');
    socket.emit('updaterooms', rooms, 'room1');
  });

  // when the client emits 'sendchat', this listens and executes
	socket.on('sendMove', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.in(socket.room).emit('sendMove', socket.username, data);
	});

	socket.on('switchRoom', function(newroom){
		// leave the current room (stored in session)
		socket.leave(socket.room);
		// join new room, received as function parameter
		socket.join(newroom);
		socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
		// sent message to OLD room
		socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
		// update socket session room title
		socket.room = newroom;
		socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
		socket.emit('updaterooms', rooms, newroom);
	});

	// when the user disconnects.. perform this
	socket.on('disconnect', function(){
		// remove the username from global usernames list
		delete usernames[socket.username];
		// update list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		// echo globally that this client has left
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
		socket.leave(socket.room);
	});
});
*/
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
/*
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
  });*/
//}
