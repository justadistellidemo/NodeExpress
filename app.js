var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/catch', function(request, response) {
  var body = request.body;
  console.log("Received: ", body);
  response.sendStatus(200)
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Magic is happening on port', port);
});
