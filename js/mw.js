$(function () {
    $("a[href=#features]").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 750);
    });
});