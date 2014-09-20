var Services = {
    
    getStories: function ( callback ) {
        
        $.ajax ( {
            url: 'http://apipaperboy.ezpz.gs/stories/',
            dataType: 'jsonp',
            success: callback
            });
        
    }
};