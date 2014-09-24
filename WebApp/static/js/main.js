// NameSpace of Module pattern
var app = app || {};

// Self Invoking Anonymous Function
(function()){
	
	app.controller = {
		init: function(){
			app.working.init();
		}
	}

	app.working = {
		init: function(){
			app.working.desk();
		},

		desk: function(){
			console.log("start working at desk");
		}
	}

})();

app.controller.init();