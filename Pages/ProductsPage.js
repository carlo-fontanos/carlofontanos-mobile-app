var Observable = require("FuseJS/Observable");

var data = Observable();

fetch('http://carlofontanos.com/api/fuse-carlofontanos.php')
	.then(function(response) { 
		return response.json(); 
	})
	.then(function(responseObject) {
		data.value = responseObject; 
	});
	
function go_to_single_product_page(arg){
	var product = arg.data;
	// console.log(product.excerpt);
	product.excerpt = product.excerpt.replace(/(\r\n|\n|\r)/gm,"");
	router.push("productSinglePage", product);
}

module.exports = {
	data: data,
	go_to_single_product_page: go_to_single_product_page
};