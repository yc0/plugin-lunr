require([
    'gitbook',
    'jquery'
], function(gitbook,$) {
    var events = gitbook.events;
    events.bind('start', function (e, config) {
        // initilization
        init();
    });
    events.bind('page.change', function(e, config) {
        // after page changes
        init();
    });
    var init = function() {
        $('#book-search-input input').bind('keyup keydown keypress propertychange',function() {
            var me = $(this);
            clearTimeout(me.data('timer'));
            me.data('timer', setTimeout(function(){
            
                var reg = new RegExp('<span class="search-highlight">(.*?)</span>','ig');
                $('.search-results-item p').each(function() {                
                    var text = $(this).text().replace(reg,'$1');                    
                    $(this).html(text);
                });
                

                var key = $('#book-search-input input').val();
                if ( key && 0 !== key.length) {
                    var reg = new RegExp('('+key.replace(/,/,'|')+')','igm');
                    $('.search-results-item p').each(function() {
                        var me = $(this);                    
                        var text = me.text().replace(reg,'<span class="search-highlight">$1</span>');                    
                        me.html(text);
                    });                  
                //$('.search-results-item p').html($('.search-results-item p').html().replace(reg,'$1<span class="search-highlight">$2</span>'));
                //$('.page-inner').html($('.page-inner').html().replace(reg,'$1<span class="search-highlight">$2</span>'));
                    }
 
            }, 500));

                     
                

            
            
        });
        
    }

    
    
    //var reg = new RegExp('(>[^<]*)(' + $('.page-inner').value().replace(/,/,'|') + ')','igm');
    //$('.page-inner').html($('.page-inner').html().replace(reg,'$1<span class="search-highlight">$2</span>'));
        
});