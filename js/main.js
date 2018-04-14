$(document).ready(function(){
    console.log("ready");


    // INTRO
    var blurbs = [  "I probably had too much coffee today.",
                    "I hope my dog is proud of me.",
                    "I could use a another nap right now.",
                    "I should probably clean up my browser tabs.",
                    "The logo is supposed to be my initials.",
                    "I picked #A37979 because of a shirt I bought in 2010.",
                    "I'm constantly craving hot wings and elotes.",
                    "Most of my online searches are on how to center HTML elements."];

    function blurb(){
        var random = Math.floor(Math.random() * blurbs.length);
        console.log(random);
        $("#blurb").html(blurbs[random]);
    }

    blurb();
    $("#blurb").click(function(){blurb();});

    // RESUME

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
                break;
            case 4:
                $("#skills").show();
                $("#a-skills").addClass("resume-link-active weight-heavy");
            
        }
    }

    $(".resume-type").hide();
    $("#education").show();

    $("#a-education").click(function(){ resume(1); return false; });
    $("#a-work").click(function(){ resume(2); return false; });
    $("#a-volunteer").click(function(){ resume(3); return false; });
    $("#a-skills").click(function(){ resume(4); return false; });

    // SCROLL TO TOP BUTTON

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


    //SMOOTH SCROLLING

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