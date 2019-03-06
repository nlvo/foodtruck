$('a').on("click", function(event) {
    event.preventDefault();
    // console.log($(this).attr('data-related'));
    var $id = $(this).attr('data-related');
    $(".page").each(function() {
        $(this).hide();
        if ($(this).attr('id') == $id) {
            $(this).show();
        }
    });
});
