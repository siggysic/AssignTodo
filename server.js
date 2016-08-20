var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(express.static(__dirname + '/api'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
}));
app.use(allowCrossDomain);
app.use('/', require('./api/index'));

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Server Started at Port : ' + app.get('port'));
});