document.addEventListener("DOMContentLoaded", function(e) {
    var n = document.getElementsByClassName("cd-auto-hide-header");
    belowNavHeroContent = document.getElementsByClassName("sub-nav-hero"), headerHeight = n.clientHeight;
    var t = !1;

    function i(e, n) {
        elements = document.querySelectorAll(e);
        for (var t = 0; t < elements.length; t++) elements[t].classList.add(n)
    }

    function a() {
        var e = window.scrollY;
        e > 0 ? i(".cd-auto-hide-header", "visible-bg") : function(e, n) {
            elements = document.querySelectorAll(e);
            for (var t = 0; t < elements.length; t++) elements[t].classList.remove(n)
        }(".cd-auto-hide-header", "visible-bg"), belowNavHeroContent.length > 0 && checkStickyNavigation(e), e, t = !1
    }
    window.addEventListener("scroll", function() {
        t || (t = !0, window.requestAnimationFrame ? requestAnimationFrame(a) : setTimeout(a, 250))
    }), window.onresize = function(e) {
        headerHeight = n.innerHTML = window.innerHeight
    }, window.scrollY > 0 && i(".cd-auto-hide-header", "visible-bg")
}), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        let n = $(this.hash);
        (n = n.length ? n : $("[name=" + this.hash.slice(1) + "]")).length && (e.preventDefault(), $("html, body").animate({
            scrollTop: n.offset().top
        }, 1e3))
    }
});
const sideNav = $(".side-navigation"),
    menuOverlay = $(".mobile-menu-overlay");
$(".hamburger-menu-icon").click(function() {
    $("body").addClass('hide-overflow');
    sideNav.addClass("side-navigation--open"), menuOverlay.addClass("mobile-menu-overlay-visiable")
}), $(".mobile-menu-overlay, .close").on("click", function() {
    $("body").removeClass('hide-overflow');
    sideNav.removeClass("side-navigation--open"), menuOverlay.removeClass("mobile-menu-overlay-visiable")
}), $(".form__input").blur(function() {
    $.trim(this.value).length ? $(this).next("label").addClass("form__label--filled") : $(this).next("label").removeClass("form__label--filled")
});