$(document).ready(function(){
	var source   = $("#girl_item_template").html();
	var girlItemTemplate = Handlebars.compile(source);
    var modalTemplateSource = $("#girl_modal_content_template").html();
    var girlModalContentTemplate = Handlebars.compile(modalTemplateSource);
    
    requestNextPage(girlItemTemplate);

    // Endless scrolling
    $(window).on('scroll', function(){
        if($(document).height() <= $(window).scrollTop() + $(window).height() + 500){
           requestNextPage(girlItemTemplate);   
        }
    });

    // prevent image from previous load
    $('body').on('click', '.girl_image_container', function(event){
        $('#girl_detail_modal .modal-content').html(
            '<div class="loading_dot_container">'
            + ' <i class="loading_dot"></i>'
            + ' <i class="loading_dot"></i>'
            + ' <i class="loading_dot"></i>'
            +'</div>'   
        );

        $("#girl_detail_modal").modal("show");

        var id = $(this).attr("data-id");
        $.ajax({
            type    :'GET',
            url     :"http://techkids.vn:4949/hotgirls/single/" + id
        }).done(function(data){
            $("#girl_detail_modal .modal-content").html(girlModalContentTemplate(data));
        }).fail(function(error){
            console.log(error);
        });
    });

    // not show modal when click button
    $('body').on('click', '.girl_image_container button', function(event){
        event.stopPropagation();
    });
});
var isLoading = false;
var masonryInitialized = false;

var currentPage = 1;
var requestNextPage = function(girlItemTemplate){

    if(isLoading) return;
    isLoading = true;

    $.ajax({
        type    :'GET',
        url     :"http://techkids.vn:4949/hotgirls/page/" + currentPage
    }).done(function(data){
        var $newItems = $(girlItemTemplate(data.items));
        currentPage = data.pageNumber + 1;
        $("#girl_item_container").append($newItems);
        if(masonryInitialized){
            $("#girl_item_container").imagesLoaded(function(){
                $("#girl_item_container").masonry('appended', $newItems);
            });
        }
        else {
            masonryInitialized = true;
            $("#girl_item_container").imagesLoaded(function(){
                $("#girl_item_container").masonry({
                    itemSelector: '.girl_item',
                    columnWidth: '.girl_item',
                    percentPosition: true
                });
            });
        }
    }).fail(function(error){
        console.log(error);
    }).always(function(){
        isLoading = false;
    });
}