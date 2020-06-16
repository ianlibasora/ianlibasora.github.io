
// Nav bar
function openNav() {
   document.getElementById("nav").style.width = "270px";
}

function closeNav() {
   document.getElementById("nav").style.width = "0";
}

// Slides
var slideIndex = [1, 1];
var slideId = ["slide0", "slide1"]
showSlides(1, 0);
showSlides(1, 1);
// showSlides(1, 2);
// showSlides(1, 3);

function chSlide(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

// Light/dark mode
function chLight() {
   var mode = document.getElementById("chBtn").getAttribute("src")
   if (mode == "images/light.png") {
      document.getElementById("chBtn").src = "images/dark.png";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
   } else {
      document.getElementById("chBtn").src = "images/light.png";
      document.body.style.backgroundColor = "#333333";
      document.body.style.color = "white";
   }
}

// Auto set light/dark w/ local time
var time = new Date();
if (7 < time < 7) {
   document.getElementById("chBtn").src = "images/dark.png";
   document.body.style.backgroundColor = "white";
   document.body.style.color = "black";
} else {
   document.getElementById("chBtn").src = "images/light.png";
   document.body.style.backgroundColor = "#333333";
   document.body.style.color = "white";
}

// Return to top
var t_button = document.getElementById("topBtn");
window.onscroll = function() {scroll_func()};

function scroll_func() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      t_button.style.display = "block";
   } else {
      t_button.style.display = "none";
   }
}

function r_top() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
