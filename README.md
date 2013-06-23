### Snapscape it

scraping the web with node on request.

#### Use it.

```javascript
var scrapper = require("snapscrape");

scrapper.scrape("http://google.com", function(res, body){
	console.log(arguments);
});
```
cool beans

#### Add to it

```javascript

scrapper.use(/*middleware*/);

//comes with a htmlparser
scrapper.use(scrapper.htmlParser);
scrapper.scrape("http://google.com", function(res, body){
	// see googles javascripts
	console.log(res.html("body").text());
});
```

#### Build for it

the middleware is very similiar to connects middleware

```javascript
module.exports = function(response, body, next){
	next();	
};
```

`response` is the response from the server your pulling from

`body` is the body from server, or aka the goods

`next` is a function called to pass payload to next middleware function or callback;

###### to come

probably hooking this into a promise system so that you can have nice errors;

```javascript
var error = function(){
	console.log("you fail")
}
scrapper.scrape("FAIL", function(res, body){
	
}, err);
```

and test!




