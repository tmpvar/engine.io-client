/*global importScripts*/

importScripts('/test/support/engine.io.js');

var engine = require('engine.io');
var socket = new engine.Socket();
socket.on('message', function(msg){
  window.postMessage(msg);
});
