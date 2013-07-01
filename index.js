

var 
Scrapper = require("./lib/scrapper"),

// constructor
SnapScrape = function(){
	// Allows us to just tag out middleware onto snapscrape
	require("./lib/middleware")(this);
	this.middleware = [];
	return this;
};

// settup for middleware
SnapScrape.prototype.use = function(fn){
	if(typeof fn === "function"){
		this.middleware.push(fn);
	}
};

// command to scape takes a url string and 
// a callback function
SnapScrape.prototype.scrape = function(url, callback){
	var self = this;
	Scrapper.call(this, url, function(err, res, body){
		self._runMW.call(self, res, body, callback);
	})
};

// private... for runing middleware against request
SnapScrape.prototype._runMW = function(res, body, next){
	this._next(res, body, next, 0).call(this);
};

// private... middleware queue
SnapScrape.prototype._next = function(res, body, last, index){
	var self = this;
	return function(){  
		if (index === self.middleware.length || !self.middleware.length){
			last(res, body);
			return true;
		}else{
			self.middleware[index].
				call(self, res, body, self._next.
					call(self, res, body, last, index + 1));
		}
		
	};
};

module.exports = new SnapScrape();