function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if (($(window).scrollTop() > startY)) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    };
};

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
};

function checkButton() {
    if (!$(".navbar").hasClass("scrolled-2")) {
        $(".navbar").addClass("scrolled-2");
    } else {
        $(".navbar").removeClass("scrolled-2");
    }
}

if ($("button.navbar-toggler").click(function () {
    checkButton();
}));
