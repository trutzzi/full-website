
$(document).ready(function () {
    yearCopyright = new Date().getFullYear();
    $('.copyright-year').html(yearCopyright)
    $('.banner-slide').slick({
        autoplay: true
    });
    window.onscroll = function () { myFunction() };
    var navbar = document.querySelector("nav");
    var sticky = navbar.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
})