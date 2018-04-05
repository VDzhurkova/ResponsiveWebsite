$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();

            $('html, body').animate({
                scrollLeft: $(this.hash).offset().left
            }, 800);
        }
    });

   
});

function scrollForward(e) {
    e.preventDefault();
    
    window.scrollBy({
        top: 0,
        left: 1350,
        behaviour:'smooth'
    });
}



function openPrice(e, name) {
    var price;
    price = document.getElementsByClassName("tablecontent");;
    for (var i = 0; i<price.length; i++) {
        price[i].style.display = "none";
    }
    var tables;
    tables = document.getElementsByClassName("tablelink");
    for (var i = 0; i<tables.length; i++) {
        tables[i].className = tables[i].className.replace("purple", "");
    }

    document.getElementById(name).style.display = "block";
    e.currentTarget.firstElementChild.className += "purple";
}

document.getElementById('myLink').click();
document.getElementById('myRegular').click();