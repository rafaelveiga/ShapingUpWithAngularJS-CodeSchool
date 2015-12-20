(function(){
	var app = angular.module('store', []);

	var gems = [
		{
			name: "GemNameGoesHere",
			price: 2,
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque!",
			images: [
				{
					full: "http://lorempixel.com/250/250",
					thumb: "http://lorempixel.com/50/50"
				},
				{
					full: "http://lorempixel.com/250/250",
					thumb: "http://lorempixel.com/50/50"
				}
			],
			reviews: [
				{
					stars: 5,
					body: "Lorem ipsum dolor sit amet, consectetur.",
					author: "email@email.com"
				},
				{
					stars: 2,
					body: "Lorem ipsum dolor sit amet, consectetur.",
					author: "emaijjl@email.com"
				}
			],
			canPurchase: true,
			soldOut: false
		}, 
		{
			name: "anotherGemHere",
			price: 3.44,
			description: "Lorem ipsum dolor sit amet.",
			images: [
				{
					full: "http://lorempixel.com/250/250",
					thumb: "http://lorempixel.com/50/50"
				},
				{
					full: "http://lorempixel.com/250/250",
					thumb: "http://lorempixel.com/50/50"
				}
			],
			reviews: [
				{
					stars: 99,
					body: "Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, rem.dolor sit amet, consectetur.",
					author: "email@email.com"
				},
				{
					stars: 0,
					body: "Lorem ipsum dolor sit amet, consectetur.",
					author: "emaijjl@email.com"
				}
			],
			canPurchase: true,
			soldOut: false
		}
	];

	app.controller('StoreController', function() {
		this.products = gems;
	});
	

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
	});


})();

