$("document").ready(function () {
    $(".categories-menu").click(function () {
        $('.categories-menu1').slideToggle();
    });
    $(".categories-menu1").click(function () {
        $('.categories-menu2').slideToggle();
    });
});

//jQuery for hide and show the comments in review section
$(function() {
    $('article.reviews').slice(0,3).show();
    $('.show-more').on('click',function(){
        $('article:hidden').slice(0,3).slideDown();
        if($('article:hidden').length === 0){
            $('.show-more').fadeOut('slow');
        }
    });
});
