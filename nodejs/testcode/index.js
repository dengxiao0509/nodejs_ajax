// JavaScript source code
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.liste;
handle["/liste"] = requestHandlers.liste;

server.start(router.route, handle);

