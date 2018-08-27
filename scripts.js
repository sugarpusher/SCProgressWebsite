// ===================================================
// REMOVE COLLAPSIBLE CLASSES TO DISPLAY FULL CONTENT
// ===================================================

function epCollapse(){
  if ($(".width-tester").css("width") == "768px") {
    if(!$(".ep-section .collapse.ep-desc" ).hasClass( "show" )){

      $(".ep-top").attr({
        "data-toggle" : "none"
      });
      $("#body-wrap .section.ep-section .ep-top").attr({
        "aria-expanded" : "true"
      });        
      $('.ep-icon, .ep-desc, .ep-video').addClass("show");
      // $(".ep-section .collapse.ep-icon").addClass("show");        
      // $(".ep-section .collapse.ep-desc").addClass("show");
      // $(".ep-section .collapse.ep-video").addClass("show");
    }
  } 
}

// ===================================================
// CHANGE LINK TEXT WHEN CLICKED (SHOW MORE/SHOW LESS)
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

function checkmark(){  
  $( ".ep-top" ).click(function() {
    $(".ep-checkmark").toggle();
  });
  $( ".ep-close" ).click(function() {
    $(".ep-checkmark").toggle();
  });
}

$(document).ready(function(){    
  changeLink();
  epCollapse();  
  checkmark();
});  

$(window).on('resize', function(){
  epCollapse();
});