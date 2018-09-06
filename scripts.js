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
    $(".section .ep-top p").toggleClass("light");
    var thisSection = $(this).closest("[id]").prop("id");
    console.log(thisSection);
    $("#" + thisSection + " .collapse-toggle").toggleClass("rotate");
    $("#" + thisSection + " .ep-top p").toggleClass("light");
  });
}

// ===================================================
// FUNCTION CALLS
// ===================================================

$(document).ready(function(){    
  changeLink();
  epCollapse();  
  rotateArrow();
});  

$(window).on('resize', function(){
  epCollapse();
});