var 
Request = require("request"),
PhantomJS = require("phantomjs"),
binPath = PhantomJS.path, 
childProccess = require("child_process");

module.exports = function(url, callback){
	
	// this should probably have some prep 
	// before we just send it to request

	// Request(url, callback);

	childProccess.execFile( binPath , [ __dirname + "/scrapper/webpage.js", url ], function( err , stdout, stderr ){

		console.log( arguments );

		callback(null, {}, " ");

	} );


}