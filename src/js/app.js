(function(){
	var app = angular.module('store', ['store-products']);

	

	app.controller('StoreController', [ '$http',  function($http) {
		var store = this;

		store.products = [];

		$http.get('js/products.json').success(function(data) {
			store.products = data;
		});
	}]);
	
	app.controller('PanelController', function() {
		this.tab = 3;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab == checkTab;
		};
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	


})();

