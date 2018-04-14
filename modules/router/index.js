var pathRegexp = require('path-to-regexp');
var parseUrl = require('parseurl');
var methods = require('../methods');

var layer = function(req){
  if(pathRegexp(req)){

  }
}


router.use = function(path,callback) {
  this.stacks.push({
    path:path,
    callback:callback
  });
  return this;
};

methods.forEach(function(method){
  router[method] = function(path){
    var route = this.route(path)
    return this;
  };
});
