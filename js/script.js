// $(function() {
//     $(document).scroll(function() {
//         var $nav = $(".navbar-fixed-top");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

//     });
// });

$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})
var icon = document.getElementById("icon");
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}
let localData = localStorage.getItem("theme");
if (localData == "light") {
    icon.src = "img/moon.png";
    document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
    icon.src = "img/sun.png";
    document.body.classList.add("dark-theme");
}
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "img/sun.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "img/moon.png";
        localStorage.setItem("theme", "light");
    }
}
$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('#technow');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-default").css('background-color', 'var(--primary-nav-color)');
                $(".navbar-default").css('color', 'var(--secondary-nav-color)');
                $(".dropdown").css('background-color', 'var(--primary-nav-color)');
                $(".dropdown-menu").css('background-color', 'var(--primary-nav-color)');
                // $(".dropdown-menu").css('color', 'var(--secondary-nav-color)');
                // $(".dropdown").css('background-color', 'var(--primary-nav-color)');
                // $(".dropdown").css('color', 'var(--secondary-nav-color)');
            } else {
                $(".navbar-default").css('background-color', 'transparent');
                $(".dropdown-menu").css('background-color', 'transparent');
                $(".dropdown").css('background-color', 'transparent');
            }
        });
    }
});