/**
 * Global Variables and Functions.
 * Everything here will be available in the entire app.
 */
 
var icons_path = 'assets/icon/';
var app_pages = [
	{'name':'HOME','ux':'homePage','icon':icons_path + 'page-home.png'},
	{'name':'ABOUT','ux':'aboutPage','icon':icons_path + 'page-about.png'},
	{'name':'TUTORIALS','ux':'tutorialsPage','icon':icons_path + 'page-tutorials.png'},
	{'name':'PORTFOLIO','ux':'portfolioPage','icon':icons_path + 'page-portfolio.png'},
	{'name':'PRODUCTS','ux':'productsPage','icon':icons_path + 'page-products.png'},
	{'name':'CONTACT','ux':'contactPage','icon':icons_path + 'page-contact.png'}
];

function go_to_page(args){
	router.push(args.data.ux);
	EdgeNavigator.dismiss();
}

module.exports = {
	app_pages: app_pages,
	go_to_page: go_to_page
};