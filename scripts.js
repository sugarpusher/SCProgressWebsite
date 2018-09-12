// ===================================================
// REMOVE COLLAPSIBLE CLASSES TO DISPLAY FULL CONTENT
// ===================================================

function epCollapse(){
  if ($(".width-tester").css("width") == "768px") {
    if(!$(".collapse.ep-desc").hasClass( "show" )){ 
      $('.ep-icon, .ep-desc, .ep-video').addClass("show");
    }
  } else {
    if($(".collapse.ep-desc" ).hasClass( "show" )){ 
      $('.ep-icon, .ep-desc, .ep-video, .ep-close').removeClass("show");
    }
  }
}

// ===================================================
// CHANGE "more" LINK TEXT WHEN CLICKED (SHOW MORE/SHOW LESS)
// ===================================================

function changeLink(){
  $("a.more").click(function () {
    var more = $(this).attr("moretext");
    if (typeof more !== typeof undefined && more !== false) {
      // console.log(more); 
      $(this).text(function(i, text){
          return text === "show less" ? more : "show less";
      })
    }
  });
}

// ===================================================
// ROTATE COLLAPSE ARROW AND CHANGE TITLE COLOR
// ===================================================

function rotateArrow(){
  $(".collapse-toggle, .ep-close").click(function () {
    var thisSection = $(this).closest("[id]").prop("id");
    $("#" + thisSection + " .collapse-toggle").toggleClass("rotate");
    $(".collapse-toggle").not(this).removeClass("rotate");
  });
}



function changeColor(){
  $(".collapse-toggle").click(function () {
    $(".section .ep-top p").addClass("light");
    var thisSection = $(this).closest("[id]").prop("id");
    $("#" + thisSection + " .ep-top p").removeClass("light");
  });
  $(".ep-close").click(function () {
    $(".section .ep-top p").removeClass("light");
    var $card = $(this).closest('.card');
    $('html,body').animate({
      scrollTop: $card.offset().top
    }, 500);
  });
}

// ===================================================
// FUNCTION CALLS
// ===================================================

$(document).ready(function(){    
  changeLink();
  epCollapse();  
  rotateArrow();
  changeColor();

  $('.ep-icon.collapse').on('shown.bs.collapse.ep-icon', function(e) {
    var $card = $(this).closest('.card');
    $('html,body').animate({
      scrollTop: $card.offset().top
    }, 500);
  });
  
});  

// $(window).on('resize', function(){
//   epCollapse();
// });