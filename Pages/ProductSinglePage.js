var product = this.Parameter; /* Receive product data from go_to_single_product_page() in HomePage */

/**
 * The mapping function will be called whenever there is a new value in "product". This new value is 
 * what gets passed to the function as its argument. The function will then return a new value based 
 * on this argument, which represents the value in the Observable we're creating. 
 */
var title = product.map(function(x) { return x.title; });
var location = product.map(function(x) { return x.location; });
var author = product.map(function(x) { return x.author; });
var excerpt = product.map(function(x) { return x.excerpt; });
var imageUrl = product.map(function(x) { return x.imageUrl; });
var permalink = product.map(function(x) { return x.permalink; });

function back() {
	router.goBack();
}

/* Make our code acciessuble in XML */
module.exports = {
	title: title,
	location: location,
	author: author,
	excerpt: excerpt,
	imageUrl: imageUrl,
	permalink: permalink,
	back: back
};