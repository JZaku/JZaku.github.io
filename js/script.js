var action = "click";
var speed = "2500";
var link = {
    intro: 'href="html/intro.html"',
    work: 'href="html/cv.html"',
    porto: 'href="html/portfolio.html"'
}

$(window).ready(function(){
    $(".badge").fadeIn(8000);
});

$(document).ready(function(){
    // Topic Handler
    $('li.title').on(action, function(){
        // Get next element
        $(this).next()
            .slideToggle(speed)
                // Select all other Topics
                .siblings('li.text')
                     .slideUp();
    });
});