steal(
	'./paperboy.less',
	'./models/fixtures/fixtures.js',
    './components/StoryController/StoryController',
    './models/Services',
function(less, fixtures, StoryController){
	
    new StoryController ( '#storySection' );
})