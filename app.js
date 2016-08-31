var app = angular.module('app', ['uiGmapgoogle-maps']);

app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBYgIiaQsnVrOSaSpqH2RVHolXFll4FyxU',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})

app.controller('Controller', function Controller($scope, uiGmapGoogleMapApi) {
	$scope.window = {
		model: {},
		show: false,
		options:{
        	pixelOffset: {
        		width: -1,
        		height: -20
        	}
        }
	}

	$scope.markers = [
		{
			id: 1,
			name: "NYC Transit Museum",
			category: 'museum',
			icon: 'pin.png',
			latitude: 40.690682,
			longitude: -73.989745,
			subway: ['2', '3', '4', '5', 'A', 'C', 'G', 'N', 'R'],
			description: "Housed in a 1936 subway station, this museum features interactive exhibits like vintage trains."
		},
		{
			id: 2,
			name: "The High Line",
			category: 'park',
			icon: 'pin.png',
			latitude: 40.748053,
			longitude: -74.004727,
			subway: ['A', 'C', 'E', 'L'],
			description: "Popular park 30 feet above street level on an old rail line, with river & city views."
		},
		{
			id: 3,
			name: "Museum of Modern Art",
			category: 'museum',
			icon: 'pin.png',
			latitude: 40.761457,
			longitude: -73.977622,
			subway: ['B', 'D', 'F', 'M', 'E'],
			description: "Works from van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The Modern restaurant."
		},
		{
			id: 4,
			name: "Smorgasburg",
			category: 'food',
			icon: 'pin.png',
			latitude: 40.721020,
			longitude: -73.962178,
			subway: ['G', 'L'],
			description: "Buzzy seasonal outdoor foodie market on Saturdays, offering 75+ vendors & city skyline views."
		},
		{
			id: 5,
			name: "Prospect Park",
			category: 'park',
			icon: 'pin.png',
			latitude: 40.721020,
			longitude: -73.962178,
			subway: ['2', '3', '4', '5', 'B', 'F', 'G', 'Q'],
			description: "Secluded tree-lined grassy area within Prospect Park attracting frisbee enthusiasts & dog walkers."
		},
		{
			id: 6,
			name: "Barclays Center",
			category: 'arena',
			icon: 'pin.png',
			latitude: 40.682715,
			longitude: -73.975388,
			subway: ['2', '3', '4', '5', 'D', 'N', 'R', 'G'],
			description: "Home to the Brooklyn Nets basketball games plus a venue for concerts & boxing matches."
		},
		{
			id: 7,
			name: "The Royal Palms Shuffleboard Club",
			category: 'bar',
			icon: 'pin.png',
			latitude: 40.678675,
			longitude: -73.986939,
			subway: ['D', 'F', 'G', 'N', 'R'],
			description: "Shuffleboard courts draw playful crowds to this big bar with food trucks & occasional live music."
		},
		{
			id: 8,
			name: "Ample Hills Creamery",
			address: '305 Nevins St',
			category: 'food',
			icon: 'pin.png',
			latitude: 40.679012,
			longitude: -73.987318,
			subway: ['D', 'F', 'G', 'N', 'R'],
			description: "Factory, shop & roof deck by a Brooklyn ice cream maker, with 24 rotating flavors & other treats."
		},
		{
			id: 9,
			name: "IPPUDO NY",
			address: "65 4th Ave",
			category: "food",
			icon: 'pin.png',
			latitude: 40.731005,
			longitude: -73.990276,
			subway: ['4', '6', 'N', 'Q', 'R'],
			description: "Ramen dishes & pork buns are the lures at this popular East Village Japanese eatery."
		},
		{
			id: 10,
			name: "New York Marriott at The Brooklyn Bridge",
			address: "65 4th Ave",
			category: "food",
			icon: 'pin.png',
			latitude: 40.731005,
			longitude: -73.990276,
			subway: ['4', '6', 'N', 'Q', 'R'],
			description: "Yada yada yada blah blah blah"
		},
		{
			id: 11,
			name: "Brooklyn Museum",
			address: "200 Eastern Pkwy, Brooklyn, NY 11238",
			category: "museum",
			icon: 'pin.png',
			latitude: 40.671377,
			longitude: -73.963674,
			subway: ['2', '3', '4'],
			description: "Beaux Arts landmark famed for ancient & modern art collections & world-class temporary exhibitions."
		},
		{
			id: 12,
			name: "Brooklyn Flea Market",
			address: "Water St, Brooklyn, NY 11201",
			category: "market",
			icon: 'pin.png',
			latitude: 40.703115,
			longitude: -73.988113,
			subway: ['A', 'C', 'F'],
			description: "Yada yada yada blah blah blah"
		},
		{
			id: 13,
			name: "Junior's Cheesecake",
			address: "386 Flatbush Ave Ext, Brooklyn, NY 11201",
			category: "food",
			icon: 'pin.png',
			latitude: 40.690132,
			longitude: -73.981983,
			subway: ['2', '3', '4', '5', 'A', 'C', 'G'],
			description: "New York-style cheesecake is the thing to order at this essential Brooklyn diner."
		},
		{
			id: 14,
			name: "Shake Shack",
			address: "409 Fulton St, Brooklyn, NY 11201",
			category: "food",
			icon: 'pin.png',
			latitude: 40.692302,
			longitude: -73.988830,
			subway: ['2', '3', '4', '5', 'A', 'C', 'G', 'N', 'R'],
			description: "Hip, counter-serve chain for gourmet takes on fast-food classics like burgers & frozen custard."
		},
		{
			id: 15,
			name: "Hill Country Barbecue Market",
			address: "345 Adams Street (on Willoughby Plaza), Brooklyn, NY 11201",
			category: "food",
			icon: 'pin.png',
			latitude: 40.692409,
			longitude: -73.988470,
			subway: ['2', '3', '4', '5', 'A', 'C', 'G', 'N', 'R'],
			description: "BBQ favorites, bourbon & cocktails in a lively space with cafeteria-style ordering & communal seats."
		},
		{
			id: 16,
			name: "Potbelly Sandwich Shop",
			address: "345 Adams Street, Brooklyn, NY 11201",
			category: "food",
			icon: 'pin.png',
			latitude: 40.692725,
			longitude: -73.988418,
			subway: ['2', '3', '4', '5', 'A', 'C', 'G', 'N', 'R'],
			description: "Retro-style counter-serve chain known for made-to-order toasted sandwiches, salads & baked goods."
		},
		{
			id: 17,
			name: "Panera Bread",
			address: "345 Adams Street, Brooklyn, NY 11201",
			category: "food",
			icon: 'pin.png',
			latitude: 40.692643,
			longitude: -73.988451,
			subway: ['2', '3', '4', '5', 'A', 'C', 'G', 'N', 'R'],
			description: "Counter-serve bakery/cafe chain serving sandwiches, salads & more, known for its bread & free WiFi."
		},
		{
			id: 18,
			name: "Lavendar Lake Bar",
			address: "383 Carroll St, Brooklyn, NY 11231",
			category: "bar",
			icon: 'pin.png',
			latitude: 40.678594,
			longitude: -73.989775,
			subway: ['D', 'F', 'G', 'N', 'R'],
			description: "Distressed materials add urban flair to this hip bar with a compact beverage list & creative plates."
		},
		{
			id: 19,
			name: "Black Ant",
			address: "60 2nd Ave, New York, NY 10003",
			category: "food",
			icon: 'pin.png',
			latitude: 40.725724,
			longitude: -73.989298,
			subway: ['B', 'D', 'F', 'M', '6'],
			description: "Modern Mexican joint putting a creative spin on traditional eats & drinks in a dark, funky interior."
		},
		{
			id: 20,
			name: "Upstate",
			address: "95 1st Avenue, New York, NY 10003",
			category: "food",
			icon: 'pin.png',
			latitude: 40.726361,
			longitude: -73.986518,
			subway: ['6', 'F', 'L'],
			description: "Small oyster bar with a rotating roster of craft beers, known for its popular happy hour."
		},
		{
			id: 22,
			name: "Death + Company",
			address: "433 E 6th St, New York, NY 10009",
			category: "bar",
			icon: 'pin.png',
			latitude: 40.725943,
			longitude: -73.984635,
			subway: ['6', 'F', 'L'],
			description: "Bartenders in bow ties & suspenders recall the speakeasy era at this dark, moody cocktail lounge."
		},
		{
			id: 23,
			name: "The Smith",
			address: "55 3rd Ave, New York, NY 10003",
			category: "food",
			icon: 'pin.png',
			latitude: 40.731047,
			longitude: -73.988556,
			subway: ['6', 'L', 'N', 'Q', 'R'],
			description: "Trendy types gather for American eats & specialty drinks at this upbeat hangout & brunch favorite."
		},
		{
			id: 24,
			name: "Luke's Lobster",
			address: "93 E 7th St, New York, NY 10009",
			category: "food",
			icon: 'pin.png',
			latitude: 40.727008,
			longitude: -73.985264,
			subway: ['6', 'L'],
			description: "Seafood counter serving Maine-style lobster rolls with toasted buns, plus clam chowder & microbrews."
		},
		{
			id: 25,
			name: "Clinton St. Baking Company & Restaurant",
			address: "4 Clinton St, New York, NY 10002",
			category: "food",
			icon: 'pin.png',
			latitude: 40.721256,
			longitude: -73.983850,
			subway: ['F', 'M', 'J', 'Z'],
			description: "Pancake lovers line up for the popular stacks served all day, along with lunch & dinner options."
		},
		{
			id: 26,
			name: "Doughnut Plant",
			address: "379 Grand St, New York, NY 10002",
			category: "food",
			icon: 'pin.png',
			latitude: 40.716279,
			longitude: -73.988680,
			subway: ['F', 'M', 'J', 'Z'],
			description: "Made fresh daily, this tiny doughnut shop makes flavors like chestnut & creme brulee."
		},
		{
			id: 27,
			name: "Whitney Museum of American Art",
			address: "99 Gansevoort St, New York, NY 10014",
			category: "museum",
			icon: 'pin.png',
			latitude: 40.739653,
			longitude: -74.008879,
			subway: ['A', 'C', 'E', 'L'],
			description: "Museum exclusively featuring 20th-century & contemporary art by American artists, most still living."
		},
		{
			id: 28,
			name: "The Standard Biergarten",
			address: "The Standard, High Line, 848 Washington St, New York, NY 10014",
			category: "bar",
			icon: 'pin.png',
			latitude: 40.740498,
			longitude: -74.008018,
			subway: ['A', 'C', 'E', 'L'],
			description: "Beer, sausages, pretzels & Ping-Pong offered in an outdoor setting under the High Line."
		},
		{
			id: 29,
			name: "Murray's Cheese Shop",
			address: "254 Bleecker St, New York, NY 10014",
			category: "food",
			icon: 'pin.png',
			latitude: 40.731048,
			longitude: -74.003010,
			subway: ['1', '2', 'A', 'C', 'E', 'B', 'D', 'F', 'M'],
			description: "Foodie mecca offering an array of fine cheeses plus breads, cured meats, olives & other deli items."
		},
		{
			id: 30,
			name: "Cafeteria",
			address: "119 7th Ave, New York, NY 10010",
			category: "food",
			icon: 'pin.png',
			latitude: 40.740573,
			longitude: -73.997974,
			subway: ['1', '2', 'A', 'C', 'E', 'L'],
			description: "A swanky take on a diner attracting people-watchers all day & post-clubbers late nights."
		},
		{
			id: 31,
			name: "Jane",
			address: "100 W Houston St, New York, NY 10012",
			category: "food",
			icon: 'pin.png',
			latitude: 40.727398,
			longitude: -74.000225,
			subway: ['A', 'C', 'E', 'B', 'D', 'F', 'M'],
			description: "A casual space sets the scene for American meat & seafood staples, plus a busy weekend brunch."
		},
		{
			id: 32,
			name: "Tia Pol",
			address: "205 10th Ave, New York, NY 10011",
			category: "food",
			icon: 'pin.png',
			latitude: 40.747285,
			longitude: -74.004778,
			subway: ['A', 'C', 'E'],
			description: "A tiny, rustic space is an apt setting for traditional Spanish tapas & daily specials."
		},
		{
			id: 33,
			name: "Chelsea Market",
			address: "75 9th Ave, New York, NY 10011",
			category: "food",
			icon: 'pin.png',
			latitude: 40.742138,
			longitude: -74.005113,
			subway: ['A', 'C', 'E'],
			description: "Indoor marketplace renowned for its wide range of grocers (fish, produce, etc.), shops & eateries."
		},
		{
			id: 34,
			name: "Carroll Place",
			address: "157 Bleecker St, New York, NY 10012",
			category: "food",
			icon: 'pin.png',
			latitude: 40.728667,
			longitude: -73.999759,
			subway: ['6', 'A', 'C', 'E', 'B', 'D', 'F', 'M', 'N', 'Q', 'R'],
			description: "Evocative gastropub & wine bar pairing its drinks with Italian-influenced fare in comfortable digs."
		},
		{
			id: 35,
			name: "Sweet Chick",
			address: "157 Bleecker St, New York, NY 10012",
			category: "food",
			icon: 'pin.png',
			latitude: 40.728667,
			longitude: -73.999759,
			subway: ['L', 'G'],
			description: "Gourmet chicken & waffles star at this hip, down-home Southern comfort-food resource with cocktails."
		},
		{
			id: 36,
			name: "The Saint Austere",
			address: "613 Grand St, Brooklyn, NY 11211",
			category: "food",
			icon: 'pin.png',
			latitude: 40.711425,
			longitude: -73.947627,
			subway: ['L', 'G'],
			description: "Trendy, elegant bistro presenting elevated small plates alongside beer & wine."
		},
		{
			id: 37,
			name: "Fette Sau",
			address: "354 Metropolitan Ave, Brooklyn, NY 11211",
			category: "food",
			icon: 'pin.png',
			latitude: 40.713880,
			longitude: -73.956488,
			subway: ['L', 'G'],
			description: "Popular dry-rub BBQ, beer & bourbon purveyor with an industrial, cafeteria-style setting."
		},
		{
			id: 38,
			name: "Caracas Arepa Bar",
			address: "291 Grand St, Brooklyn, NY 11211",
			category: "food",
			icon: 'pin.png',
			latitude: 40.713112,
			longitude: -73.957473,
			subway: ['L', 'G'],
			description: "Arepa specialist offering creative, low-priced renditions of the Venezuelan corn-flour staple."
		},
		{
			id: 39,
			name: "Radegast Hall & Biergarten",
			address: "113 N 3rd St, Brooklyn, NY 11211",
			category: "bar",
			icon: 'pin.png',
			latitude: 40.716661,
			longitude: -73.961462,
			subway: ['L'],
			description: "Sprawling, boisterous beer hall offering brews, grilled wursts & regularly scheduled live music."
		},
		{
			id: 40,
			name: "Roberta's",
			address: "261 Moore St, Brooklyn, NY 11206",
			category: "food",
			icon: 'pin.png',
			latitude: 40.705077,
			longitude: -73.933592,
			subway: ['L'],
			description: "Popular Bushwick destination known for its wood-fired pizzas, with a separate takeout area."
		},
		{
			id: 41,
			name: "DeStefano's Steakhouse",
			address: "89 Conselyea St, Brooklyn, NY 11211",
			category: "food",
			icon: 'pin.png',
			latitude: 40.715039,
			longitude: -73.947674,
			subway: ['G', 'L'],
			description: "Steakhouse standards & wines served in a space with an old-school Italian vibe."
		},
		{
			id: 42,
			name: "Traif",
			address: "229 S 4th St, Brooklyn, NY 11211",
			category: "food",
			icon: 'pin.png',
			latitude: 40.710609,
			longitude: -73.958897,
			subway: ['G', 'L', 'M', 'J', 'Z'],
			description: "A young crowd populates this pork-focused American eatery in an older Williamsburg neighborhood."
		},
		{
			id: 43,
			name: "Xixa",
			address: "241 S 4th St, Brooklyn, NY 11211",
			category: "food",
			icon: 'pin.png',
			latitude: 40.710435,
			longitude: -73.958469,
			subway: ['G', 'L', 'M', 'J', 'Z'],
			description: "Swanky space serving innovative, upscale takes on Mexican fare paired with a selection of mezcals."
		},
		{
			id: 44,
			name: "Randolph Brooklyn",
			address: "104 S 4th St, Brooklyn, NY 11249",
			category: "food",
			icon: 'pin.png',
			latitude: 40.712029,
			longitude: -73.963347,
			subway: ['G', 'L', 'M', 'J', 'Z'],
			description: "American meals, craft beers & cocktails in a playful interior with graffitied walls & vintage TVs."
		}
	]

	$scope.markerEvents = {
        click: function(marker, eventName, model, args) {
        	console.log('clickkkkkkkkkkked')
        	$scope.window.model = model;
        	$scope.window.show = true;
        }
    }

    $scope.closeWindow = function() {
    	$scope.window.model = {
    		coords: ''
    	};
    	$scope.window.show = false;
    };

	$scope.map = {
		center: {
			latitude: 40.716467,
			longitude: -73.949188
		},
		zoom: 13
	};

	uiGmapGoogleMapApi.then(function(maps) {});
});

app.controller('templateController', function($scope) {
	$scope.currentMarker = $scope.$parent.parameter
});
