var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log("Connected to mongod server");
})

mongoose.connect('mongodb://localhose/ground_dev');

var User = require('./model/user');

app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());

app.use('/v1/api/users', require('./routes/users')(app, User));

var server = app.listen(1038, function() {
  console.log("Express server has started on port " + 1038)
})
