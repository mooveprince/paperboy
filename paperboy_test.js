steal(
	'funcunit',
	function (S) {

	// this tests the assembly 
	module("paperboy", {
		setup : function () {
			S.open("//paperboy/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

});
