steal('can','./init.ejs', function(can, initView){
    /**
     * @class paperboy/components/ParentController/StoryController
	 * @alias StoryController   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
            var curObj = this;
            Services.getStories ( function ( data ) {
                curObj.element.html(initView( {response: data} ));
            });
		},
        ".topic_title click" : function(a,e){
            var shortUrl = $(a).data("short");
            window.open('http://apipaperboy.ezpz.gs'+shortUrl,"_blank");
        }
	});
});