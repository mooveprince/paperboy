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
		}
	});
});