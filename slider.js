$('.slider > div:gt(0)').hide();

setInterval(function(){
    $('.slider > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('.slider');
}, 5000);