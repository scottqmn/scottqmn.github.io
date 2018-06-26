$(document).ready(function(){
    console.log("ready");

    var intro = {
        blurbs: [   "I probably had too much coffee today.",
                    "I hope my dog is proud of me.",
                    "I could use a another nap right now.",
                    "I should probably clean up my browser tabs.",
                    "The color #A37979 is from a shirt I bought in 2010.",
                    "I wish the elote man would visit my neighborhood.",
                    "I've updated my privacy policy (not really)."],
        
        currentBlurb: "",

        init: function() {
            this.cacheDOM();
            this.bindEvents();
            this.newBlurb();
            this.render();
        },
        
        cacheDOM: function() {
            this.$blurb = $('#blurb');
        },
        
        bindEvents: function(){
            this.$blurb.on('click', this.newBlurb.bind(this));
        },

        render: function() {
            this.$blurb.html(this.currentBlurb);
        },

        newBlurb: function(){
            this.currentBlurb = this.blurbs[Math.floor(Math.random() * this.blurbs.length)];
            this.render();
        }

    };

    intro.init();

    // RESUME

    function showSec(sec){
        $(".resume-section").hide();
        $(".resume-link-active").removeClass("resume-link-active weight-heavy");
        
        $("#" + sec).show();
        $("#a-" + sec).addClass("resume-link-active weight-heavy");
    }

    $("#a-education").click(function(){ showSec("education"); });
    $("#a-work").click(function(){ showSec("work"); });
    $("#a-volunteer").click(function(){ showSec("volunteer"); });
    //$("#a-skills").click(function(){ showSec("skills"); });

    showSec("education");


    // SCROLL TO TOP BUTTON

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        showScrollBtn();
    };

    var w = window.matchMedia("(min-width: 600px)")

    function showScrollBtn() {
        if ((document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) && w.matches)
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