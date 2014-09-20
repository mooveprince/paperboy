//js paperboy/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('paperboy/scripts/build.html',{to: 'paperboy'});
});
