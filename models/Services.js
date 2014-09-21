var Services = {
    
    getStories: function ( callback ) {
        
        $.ajax ( {
            url: 'http://apipaperboy.ezpz.gs/topics/',
            dataType: 'jsonp',
            success: callback
            });
        
    }
};