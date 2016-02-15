var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/piano.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'piano.js'))
});

app.get('/p5.sound.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'p5.sound.min.js'))
});

app.listen(3000, function () {
});
