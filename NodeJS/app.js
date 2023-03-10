var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
  res.send('<h1>Express works..</h1>');
});

app.get('/tasks', function(req, res) {
  fs.readFile('./db.json', function(err, data) {
    var tasks = JSON.parse(data.toString()).tasks;
    res.json(tasks);
  });
});

server.listen(3000, function () {
  console.log('server listening to post 3000');
});



// var http = require ('http');
// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// var server = http.createServer(function(req, res) {
//   eventEmitter.emit('someone requested', 'Test') // event Emit  {ante Trigger}
//   res.end('server works !!!');
// });

// eventEmitter.on('someone requested', function(data) {
//   console.log('A request has been done on the server!', data);
// }); // event listerner

// server.listen(3000, 'localhost', function () {
//   console.log('server started on port : 3000');
// });