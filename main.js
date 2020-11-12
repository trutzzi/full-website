
$(document).ready(function () {
    // Set year for copyright
    yearCopyright = new Date().getFullYear();
    $('.copyright-year').html(yearCopyright)
    // Initialize banner slider 
    $('.banner-slide').slick({
        autoplay: true
    });
    // Set menu sticky
    window.onscroll = function () { setSticky() };
    var navbar = document.querySelector("nav");
    var sticky = navbar.offsetTop;
    function setSticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    $('nav .level1').superfish();
})