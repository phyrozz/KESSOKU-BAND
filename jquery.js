$(window).scroll(function() {
    $(".heading").css("opacity", 1 - $(window).scrollTop() / 500)
});