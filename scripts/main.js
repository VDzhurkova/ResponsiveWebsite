
var slideIndex = 1;
showSlides(slideIndex);
 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (var i = 0; i < squares.length; i++) {
        squares[i].className = squares[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    squares[slideIndex - 1].className += " active";
    setTimeout(showSlides, 8000); // Change image every 8 seconds
}

function showHidden(n) {
    var hidden = document.getElementsByClassName("hidden");
    
    for (var i = 0; i < hidden.length; i++) {
        hidden[i].style.display = "none";
    }
    
    document.getElementById(n).style.display = "block";
    
}

//function readMore(text, button) {
//    var element = document.getElementById(text);
//    var btn = document.getElementById(button)
//    if (btn.textContent == 'More') {
//        btn.textContent = 'Less';
//        $(element).slideDown();
        
//    }
//    else {
//            $(element).slideUp();
//            btn.textContent = 'More';
//    }
//}

//$('#more1').on('click', function (e) {
//    e.preventDefault();
//    readMore('more_text1', 'more1');
//});
//$('#more2').on('click', function (e) {
//    e.preventDefault();
//    readMore('more_text2', 'more2');
//});
//$('#more3').on('click', function (e) {
//    e.preventDefault();
//    readMore('more_text3', 'more3');
//});

$(document).ready(function () {
    
    $('a[href^="#"]').on('click', function (event) {

       
        if (this.hash !== "") {
           
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800 );
        }
    });
});