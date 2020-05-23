var action = "click";
var speed = "500";

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