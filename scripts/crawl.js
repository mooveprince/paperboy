// load('paperboy/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("paperboy/paperboy.html","paperboy/out")
});
