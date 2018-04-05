
function navigation() {
    var x = document.getElementById("myBar");
    if (x.className === "navigation-bar") {
        x.className += " responsive";
    } else {
        x.className = "navigation-bar";
    }
}

$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();

            $('html, body').animate({
                scrollDown: $(this.hash).offset().down
            }, 800);
        }
    });
});
//function dropmenu() {
//    document.getElementById("myDropMenu").classList.toggle("show");
//}

//function dropsubmenu() {
//    document.getElementById("mySubMenu").classList.toggle("show");
//}
//// Close the dropdown if the user clicks outside of it
//window.onclick = function (event) {
//    if (!event.target.matches('.dropdown-link')) {

//        var dropdowns = document.getElementsByClassName("dropmenu-content");
//        var i;
//        for (i = 0; i < dropdowns.length; i++) {
//            var openDropdown = dropdowns[i];
//            if (openDropdown.classList.contains('show')) {
//                openDropdown.classList.remove('show');
//            }
//        }
//    }
//}

$(function () {
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});

