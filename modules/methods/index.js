var http = require('http')
var methods = [
  'get',
  'post',
  'put',
  'head',
  'delete',
  'options',
  'trace',
  'copy',
  'lock',
  'mkcol',
  'move',
  'purge',
  'propfind',
  'proppatch',
  'unlock',
  'report',
  'mkactivity',
  'checkout',
  'merge',
  'm-search',
  'notify',
  'subscribe',
  'unsubscribe',
  'patch',
  'search',
  'connect'
];

function getMethods() {
  return http.METHODS && http.METHODS.map(function(method) {
    return method.toLowerCase()
  })
}

module.exports = getMethods() || methods;
