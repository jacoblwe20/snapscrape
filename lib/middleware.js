var cheerio = require("cheerio");
module.exports = function(SnapScrape){

	SnapScrape.htmlParser = function(res, body, next){
		if(res.headers){
			var content = res.headers["content-type"];
			if(/html/gi.test(content)){
				res.html = cheerio.load(body);
			}
		}
		next();
	};

};