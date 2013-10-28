process.env['ENV'] = process.env['ENV'] || 'dev';

var express = require('express');
var config = require('./../config.js');

var app = express();
var http = require('http');
var server = module.exports = http.createServer(app);



var mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

global.db = MongoClient.db;
MongoClient.connect(config.param('mongo_uri'), function(err, d) {
    if(err) {
        console.log(err);
    } else {
        console.log('Connect to :: ' + d.databaseName);
        global.db = d;
    }
});

//Express middleware
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({secret: 'Super secret secret'}));

app.use(express.logger());

// support _method (PUT and DELETE in forms)
app.use(express.methodOverride());
app.use(express.static(__dirname + config.param('static_path')));


setTimeout(function() {
    app.use(app.router);
    require('./router')(app);
    app.get('*', function(req, res) {
        res.sendfile(__dirname + config.param('static_path') + '/index.html');
    });
}, 1000);


var port = config.param('port');
server.listen(port);
console.log('Listening on port ' + port);