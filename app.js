var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/scripts/piano.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/scripts/piano.js'))
});

app.get('/scripts/p5.sound.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/scripts/p5.sound.min.js'))
});

app.get('/scripts/tracking.js', function (req, res) {
  res.sendFile(path.join(__dirname, '/scripts/tracking.js'))
});

app.listen(process.env.PORT || 3000, function () {
});
