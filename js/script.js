$('.btn-bars').click(function() {
    $('.menu ul').slideToggle();
})

$(window).resize(function() {
    if ($(window).width() > 768) {
        $('.menu ul').removeAttr('style');
    }
})