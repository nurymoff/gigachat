/*
Script that uses the slideUp() method to hide the loader, then removing the preload
class from body, allowing user to scroll.
Original source of the script: Allan Nurymov
*/

$(window).on("load", function () {
    $(".loader-wrapper").slideUp(2000);
    setTimeout(function () {
        $("body").removeClass("preload");
    }, 2000);
});