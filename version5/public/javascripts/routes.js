define(["hasher","signals","crossroads"],function(hasher,signals,crossroads){
  "use strict";

  var router = crossroads.create();

  var parseHash = function(newHash){
		router.parse(newHash);
	};

  router.addRoute('', function(){
		require(['./views/home'], function() {
			//var homeView = new HomeView();
			//homeView.render();
		});
	});

  hasher.initialized.add(parseHash);
	hasher.changed.add(parseHash);
	hasher.init();

});
