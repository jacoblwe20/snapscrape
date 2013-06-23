var Request = require("request");

module.exports = function(url, callback){
	
	// this should probably have some prep 
	// before we just send it to request

	Request(url, callback); //hehe
}