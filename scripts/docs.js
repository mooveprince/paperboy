//js paperboy/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs", function(DocumentJS){
	DocumentJS('paperboy/index.html', {
		out: 'paperboy/docs',
		markdown : ['paperboy', 'steal', 'jquerypp', 'can', 'funcunit'],
		parent : 'paperboy'
	});
});