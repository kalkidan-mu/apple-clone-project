
// jQuery is a powerful JavaScript library that makes it easier to manipulate HTML, CSS, and interact with web elements on a webpage. When it comes to handling different screen sizes, jQuery is often used in combination with CSS media queries, responsive design techniques, and dynamic event handling to adjust content or layout based on the size of the screen. Here's how jQuery can be used effectively:

// 1. Detecting Screen Size with jQuery
// You can detect the size of the viewport using jQuery. For example:
// $(window).resize(function(){
//     var windowWidth =$(window).width()
//     if(windowWidth<720){
//         // do somthing for smaller screen 

//         // alert("this is small screen!")
//     }else{
//         // do somthing for bigger screen 
//         // alert("this id big screen")
//     }
// })
// WITH MEDIA QUERIES + JQUERY
// $(document).ready(function(){
//     if(window.matchMedia("(max-width: 768px)").matches){
//         // apply changes when the screen size is smaller
//     }else{
//         // applly changes for larger screens 
//     }
// })
import $ from "jquery"
$(document).ready(function () {
  function footer() {
    var windowWidth = $(window).width();
    let footerLinkWraper = $(".footer-links-wrapper h3"); // define here once

    if (windowWidth < 768) {
      footerLinkWraper.on("click", function () {
        $(this).toggleClass("expanded");
        let footerUl = $(this).next("ul");
        footerUl.slideToggle();
      });
    } else {
      footerLinkWraper.removeClass("expanded");
      footerLinkWraper.next("ul").css("display", "none");
    }
  }
  footer()
});
// issues with this => i have to refresh unless even on middle screen the h3 is clickable
$(window).on("resize",function(){
  location.reload()
}) //this will reload our page on every screan resize! the location is property reload() is method