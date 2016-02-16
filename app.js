var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var env = process.env.NODE_ENV || 'development';

app.use(express.static('public'));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('*', function (req, res, next) {
  if (req.headers['x-forwarded-proto'] != 'https' && env != "development")
    res.redirect('https://colorsynth.herokuapp.com' + req.url);
  else
    next();
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {});
