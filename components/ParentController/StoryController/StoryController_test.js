steal('paperboy/components/ParentController/StoryController','funcunit', function( StoryController, S ) {

	module("paperboy/components/ParentController/StoryController", { 
		setup: function(){
			S.open( window );
			$("#qunit-test-area").html("<div id='StoryController'></div>")
		},
		teardown: function(){
			$("#qunit-test-area").empty();
		}
	});
	
	test("updates the element's html", function(){
		new StoryController('#StoryController');
		ok( $('#StoryController').html() , "updated html" );
	});

});