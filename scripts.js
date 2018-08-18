

$(document).ready(function(){    
  
    // ====================================
    // CHANGE LINK TEXT WHEN CLICKED (SHOW MORE/SHOW LESS)
    // ====================================
  
    $("a.more").click(function () {
      var more = $(this).attr("moretext");
      if (typeof more !== typeof undefined && more !== false) {
        // console.log(more); 
        $(this).text(function(i, text){
            return text === "show less" ? more : "show less";
        })
      }
     });
  
  });
  
  