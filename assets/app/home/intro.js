

    console.log("animations loaded");
$(".intro-item img").hover(
    function(){
        $(this).filter(':not(:animated)').animate({
           top:'-40px'
        },'normal');
      // This only fires if the row is not undergoing an animation when you mouseover it
      },
      function() {
        $(this).animate({
          top:'0px'
        },'normal');
      });
   