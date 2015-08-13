var _ = require('lodash');
var express = require('express');
var getTeam = require('./lib/get_team');

var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  getTeam().then(function(members) {
    res.render('index', {
      members: members
    })
  });
});

app.get('/api/members', function(req, res) {
  getTeam().then(function(members) {
    res.send(members);
  });
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log('Listening on port: ' + port);
