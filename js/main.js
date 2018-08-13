$(document).ready(function(){
    console.log("ready");

    var intro = {
        blurbs: [   "How much coffee is too much coffee?",
                    "I hope my dog is proud of me.",
                    "I could use a another nap right now.",
                    "I should probably clean up my browser tabs.",
                    "The color #A37979 is based on a shirt I bought 8 years ago.",
                    "Having a local elote man counts as a benefit.",
                    "I've updated my privacy policy (not really).",
                    "Let me show you how good I am at Guitar Hero.",
                    "Remember to stay hydrated.",
                    "Would binging Silicon Valley count as work experience?",
                    "Does an obsession with overly spicy foods count as a hobby?",
                    "If my voice is gone, it's probably because of a card game.",
                    "Feel free to ask me for music recommendations."
                ],
        
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

    var resume = {
        ucsdData: {
            type: "resume__section__entry--education",
            name: "University of California, San Diego",
            role: "B.S. Mathematics-Computer Science",
            start: "Fall 2015",
            end: "Fall 2017",
            location: "La Jolla, CA",
            listName: "Relevant Coursework",
            bullet: ["Advanced Data Structures", "Design and Analysis of Algorithms", "Digital Systems Design", "Automata and Computability Theory", "Numerical Analysis", "Combinatorics", "Statistical Methods"]
        },

        entries: [
                {
                    type: "resume__section__entry--education",
                    name: "1University of California, San Diego",
                    role: "B.S. Mathematics-Computer Science",
                    start: "Fall 2015",
                    end: "Fall 2017",
                    location: "La Jolla, CA",
                    listName: "Relevant Coursework",
                    bullet: ["Advanced Data Structures", "Design and Analysis of Algorithms", "Digital Systems Design", "Automata and Computability Theory", "Numerical Analysis", "Combinatorics", "Statistical Methods"]
                },
                {
                    type: "resume__section__entry--education",
                    name: "2University of California, San Diego",
                    role: "B.S. Mathematics-Computer Science",
                    start: "Fall 2015",
                    end: "Fall 2017",
                    location: "La Jolla, CA",
                    listName: "Relevant Coursework",
                    bullet: ["Advanced Data Structures", "Design and Analysis of Algorithms", "Digital Systems Design", "Automata and Computability Theory", "Numerical Analysis", "Combinatorics", "Statistical Methods"]
                },
                {
                    type: "resume__section__entry--education",
                    name: "3University of California, San Diego",
                    role: "B.S. Mathematics-Computer Science",
                    start: "Fall 2015",
                    end: "Fall 2017",
                    location: "La Jolla, CA",
                    listName: "Relevant Coursework",
                    bullet: ["Advanced Data Structures", "Design and Analysis of Algorithms", "Digital Systems Design", "Automata and Computability Theory", "Numerical Analysis", "Combinatorics", "Statistical Methods"]
                }
        ],
        init: function() {
            this.cacheDOM();
            this.bindEvents();
            this.render();
        },
        cacheDOM: function() {
            this.$el = $('#resume');
            this.$education = this.$el.find('#a-education');
            this.$work = this.$el.find('#a-work');
            this.$volunteer = this.$el.find('#a-volunteer');
            this.$skills = this.$el.find('#a-skills');
            this.$section = this.$el.find('#test-section');
            this.template = this.$el.find('#resume-template').html();
        },
        bindEvents: function() {

        },
        render: function() {
            var data = {
                entries: this.entries
            };
            this.$section.html(Mustache.render(this.template, this.entries));
        }
    };

    resume.init();

    function showSec(sec){
        $(".resume__section").hide();
        $(".resume__menu--active").removeClass("resume__menu--active weight-heavy");
        
        $("#" + sec).show();
        $("#a-" + sec).addClass("resume__menu--active weight-heavy");
    }

    $("#a-education").click(function(){ showSec("education"); });
    $("#a-work").click(function(){ showSec("work"); });
    $("#a-volunteer").click(function(){ showSec("volunteer"); });
    $("#a-skills").click(function(){ showSec("skills"); });

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