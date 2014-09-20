steal('paperboy/components/ParentController','funcunit', function( ParentController, S ) {

	module("paperboy/components/ParentController", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='ParentController'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new ParentController('#ParentController');
		ok( $('#ParentController').html() , "updated html" );
	});

});