var bodyParser = require('body-parser')
// var EventEmitter = require('events').EventEmitter;
var http = require('http');

function factory() {
  var app = function(req,res,next){

  }
  app.listen = function() {
    var server = http.createServer(this);
    return server.listen.apply(server, arguments);
  };

  return app;
}

exports = module.exports = factory;
