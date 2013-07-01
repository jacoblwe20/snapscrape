
var 
page = new WebPage(),
output = { error : [], results : {} },
url = phantom.args[0];

// we have 0 args ext cause nothing good can happen
if( !url ){
	console.log( "Url is either undefined or malformed" );
	phantom.exit(1);
}

url = url.trim();

// page.onResourceRequested = function (request) {
//     console.log('Request ' + JSON.stringify(request, undefined, 4));
// };
page.onLoadFinished = function(){

	var 
	documentHtml = page.evaluate(function () {
		return document.documentElement.innerHTML;
    });

    // output.results = documentHtml
    if( output.images ){

    	console.log( output.images.length );
    	output.images.forEach( function( image, i ){
    		console.log( i );
	    	// console.log(i)
	    	var 
	    	image = output.images[i],
			el = document.querySelector("[src='" + image.url + "']");


			if( el ){
				// if we get an element lets push it to the array
				image.height = el.height;
				image.width = el.width;

			}
    	})
	}

	// output.results.html = documentHtml.
	// 	replace(/\/n/gi, "").
	// 	replace(/\/t/gi, "");

	console.log( JSON.stringify(output) );
	phantom.exit();
}

page.onResourceReceived = function (response) {
	if(/image/gi.test(response.contentType)){
		
		var image = {
			url : response.url
		};

		if( !output.results.images ){
			output.results.images = [];
		}

		output.results.images.push( image );

	}
};

page.open( url, function( status ){
	if( status !== "success" ){
		output.errors.push("Can not establish connection");
	}
});

