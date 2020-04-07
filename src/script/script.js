/* ---------------------------------------------------------------------- READY --- */
$(document).on('ready', init);

/* ----------------------------------------------------------------------- INIT --- */
function init() {
    nav_init();
    scroll();
}

/* ------------------------------------------------------------------------ NAV --- */
function nav_init() {
    nav_toggle();
}



function nav_toggle() {
    $('header .toggle').on('click', function () {
        $('body').toggleClass('nav_display');
    });
}

// function scroll() { 
//     $(window).scroll(function() { 
//         var scroll = $(window).scrollTop();

//         if (scroll >= 1) {
//             $("header .banner").addClass("small");
//         } else {
//             $("header .banner").removeClass("small");
//         } 
//     });
// }











