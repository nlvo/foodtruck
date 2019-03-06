$(document).ready(function() {
	// onload show flashscreen with a delay of 2 sec and then fade out
    $(".flashscreen").delay(2000).fadeOut();

    // Click function
    $('.page-link').on("click", function(event) {
        event.preventDefault();

        var $id = $(this).attr('data-related');

        // check all links and remove if the class active exist and remove it
        $('.page-link').removeClass('active');

        // add class to the clicked "a" link
       	$(this).addClass('active');

        // loop through all divs with the class page
        $(".page").each(function() {

            // check if the div id equals to the link data related attribute
            // if it's true then show this div or else hide   
            if ($(this).attr('id') == $id) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('.btn--form').on('click', function(event) {
        event.preventDefault();
        $('#email-thanks').fadeIn();
    });

     $('.btn--email').on('click', function(event) {
        event.preventDefault();
        $('#newsletter-thanks').fadeIn();
    });

    $('.btn--close').on('click', function(event) {
        event.preventDefault();
        $('#newsletter-thanks, #email-thanks').fadeOut();
    });

});