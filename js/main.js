$(document).ready(function(){
    console.log("ready");
    $("#knock").click(function(){
        console.log("hello");
        $("#change").html("go away");
    });

    function resume(x){
        $(".resume-section").hide();
        $(".resume-link-active").removeClass("resume-link-active weight-heavy");
        switch (x){
            case 1:
                $("#education").show();
                $("#a-education").addClass("resume-link-active weight-heavy");
                break;
            case 2:
                $("#work").show();
                $("#a-work").addClass("resume-link-active weight-heavy");
                break;
            case 3:
                $("#volunteer").show();
                $("#a-volunteer").addClass("resume-link-active weight-heavy");
        }
    }

    $("#a-education").click(function(){ resume(1); return false; });
    $("#a-work").click(function(){ resume(2); return false; });
    $("#a-volunteer").click(function(){ resume(3); return false; });

    $(".resume-type").hide();

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
            $("#scroll-top-btn").fadeIn("fast");
        else
            $("#scroll-top-btn").fadeOut("fast");
    }

    // When the user clicks on the button, scroll to the top of the document
    $("#scroll-top-btn").on('click', function() { 
        $("html, body").animate({ 
            scrollTop: 0 
        }, 500); 
    });


    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      $("#education").show();
});