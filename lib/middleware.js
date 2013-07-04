var cheerio = require("cheerio");

module.exports = function(SnapScrape){

	SnapScrape.htmlParser = function(res, body, next){
		if( 
			res &&
			typeof res.headers === "object" 
		){
			var content = res.headers["content-type"];
			if(/html/gi.test(content)){
				res.html = cheerio.load(body);
			}
		}
		next();
	};

};