var masonryInitialized = false;
var isLoading = false;
$(document).ready(function(){
	var source   = $("#girl_item_template").html();
	var girlItemTemplate = Handlebars.compile(source);
    
    requestNextPage(girlItemTemplate);

    $(window).on('scroll', function(){
        // if($(document).height() <= $(window).scrollTop() + $(window).height() + 500){
        //    requestNextPage(girlItemTemplate);   
        // }
    });
});




var requestNextPage = function(girlItemTemplate){

    if(isLoading) return;
    isLoading = true;

    $.ajax({
        type    :'GET',
        url     :'http://techkids.vn:4949/hotgirls/page/1',
    }).done(function(data){
        var $newItems = $(girlItemTemplate(data.items));
        $("#girl_item_container").append($newItems);
        if(masonryInitialized){
            $("#girl_item_container").masonry('appended', $newItems);
        }else {
            masonryInitialized = true;
            $("#girl_item_container").masonry({
                itemSelector: '.girl_item',
                // use element for option
                columnWidth: '.girl_item',
                percentPosition: true
            });
        }
    }).fail(function(error){
        console.log(error);
    }).always(function(){
        isLoading = false;
    });
}