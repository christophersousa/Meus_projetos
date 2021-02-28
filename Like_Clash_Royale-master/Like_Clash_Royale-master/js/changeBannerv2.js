$(function() {
    
    $('.jcarousel').jcarousel({
        // Configuration goes here
    }).jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true,
        method: 'scroll'
    })

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a class="page" href="#' + page + '">' + page + '</a>';
        }
    });

    $('.jcarousel').jcarousel({
        wrap: 'circular'
    });

    $('.jcarousel').on('jcarousel:targetin', 'li', function(event, carousel) {
        numero = parseInt($(this).attr('data-number')) + 1
        $tag_a = $('.jcarousel-pagination').children(`a[href="#${numero}"]`)
        $tag_a.css({'background-color': '#fff'})
        // "this" refers to the item element
        // "carousel" is the jCarousel instance
    });

    $('.jcarousel').on('jcarousel:targetout', 'li', function(event, carousel) {
        numero = parseInt($(this).attr('data-number')) + 1
        $tag_a = $('.jcarousel-pagination').children(`a[href="#${numero}"]`)
        $tag_a.css({'background-color': 'hsla(0,0%,100%,.3)'})
        // "this" refers to the item element
        // "carousel" is the jCarousel instance
    });

    $('.jcarousel-pagination').prepend(
        `<a class="arrow jcarousel-prev" href="#"><i class="fa fa-angle-left"></i></a>`
    );

    $('.jcarousel-pagination').append(
        `<a class="arrow jcarousel-next" href="#"><i class="fa fa-angle-right"></i></a>`
    );

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

});
