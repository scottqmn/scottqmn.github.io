$(document).ready(function(){
    console.log("ready");
    $("#knock").click(function(){
        console.log("hello");
        $("#change").html("go away");
    });

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
});