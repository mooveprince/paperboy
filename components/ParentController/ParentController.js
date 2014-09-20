steal('can','./init.ejs', function(can, initView){
    /**
     * @class paperboy/components/ParentController
	 * @alias ParentController   
     */
    return can.Control(
	/** @Static */
	{
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
			this.element.html(initView({
				message: "Hello World from ParentController"
			}));
		}
	});
});