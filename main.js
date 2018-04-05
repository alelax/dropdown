$(document).ready(function() {

    var itemsContainer = $('.items');

    itemsContainer.mouseenter(function() {
        $(this).children('.menu').slideDown(1000);
    });

    itemsContainer.mouseleave(function() {
        $(this).children('.menu').hide();
    });

});
