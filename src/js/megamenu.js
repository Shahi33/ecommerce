$('#barMenu').on('click',function(e){
    e.preventDefault();
    $('body').toggleClass('nav-open')
});

$('.mobile-megamenu .level0 .level-link').on('click',function(e){
    e.preventDefault();
    // $('.submenu-level0').hide()
    $(this).next().toggle();
    $(this).children().children().toggleClass('fa-angle-right fa-angle-left')
    $('.section-item-title').toggle();
})
