var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Magic is happening on port', port);
});
