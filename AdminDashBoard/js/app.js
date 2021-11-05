
// Admin DashBoard
$(".show-sidebar-btn").click(function () {
    $(".sidebar").animate({marginLeft:0});
});

$(".hide-sidebar-btn").click(function () {
    $(".sidebar").animate({marginLeft:"-100%"});
});
function urlGo(a) {
    location.href =  a 
    
}

function go(url) {
    location.href = url
}

// Item
$(function () {
    $('[data-toggle="popover"]').popover()
  })

//   item list
 $(`.full-screen-btn`).click(function () {
     let current = $(this).closest(`.card`)
     current.toggleClass(`full-screen-card`)
     if(current.hasClass(`full-screen-card`)){
       $(this).html(`<i class="feather-minimize-2"></i>`)
     }else{ $(this).html(` <i class=" feather-maximize-2"></i>"`)}
 })

 let screenHeight = $(window).height()
 let currentMenuHeight = $(".nav-menu .active").offset().top

 if(currentMenuHeight > screenHeight*0.8){
     $(".sidebar").animate(
         {
             scrollTop:currentMenuHeight-200
         },1000
     )
 }