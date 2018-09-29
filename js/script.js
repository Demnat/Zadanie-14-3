$(function(){
    
    //this code will execute after the DOM is loaded
    var carouselList = $('#carousel ul');
    var dotsContainer = $('.dotsContainer');
    var currentInterval;
    
    function moveFirstSlide() {
        
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});

    };

    function changeSlideRight() {
        
        carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
        var activeDot = $('.dotsContainer').find('.active');
        activeDot.removeClass('active');
        console.log("changeSlideRight");
        if (activeDot.next().length)  // zwraca ilość obiektów w tablicy nie indeks
        {
            activeDot.next().addClass('active');
        } else
            {
                $('.dotsContainer .dot:first').addClass("active");
            }

    };

    function moveLastSlide() {
        
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft:0});

    };

    function changeSlideLeft() {
        
        carouselList.animate({'marginLeft': +600}, 500, moveLastSlide);
        var activeDot = $('.dotsContainer').find('.active');
        activeDot.removeClass('active');
        console.log("changeSlideLeft");
        if (activeDot.prev().length)
        {
            activeDot.prev().addClass('active');
        } else
            {
                $('.dotsContainer .dot:last').addClass("active");
            }

    };

    // function move(direction) {
    //     if (currentInterval)
    //     {
    //         clearInterval(currentInterval);
    //     }
    //     if(direction == "left"){
    //         currentInterval = setInterval(changeSlideRight, 2000);
    //     } else 
    //         currentInterval = setInterval(changeSlideLeft, 3000);
    // }

    $('.carouselContainer a').click(function(e) {
        e.preventDefault();
        console.log($(this).attr("class"));
        if( $(this).attr("class") == "next"){
            // move("left");
            changeSlideRight();
          } else {
            // move("right");
            changeSlideLeft();
          }
    });

    // $('img').click(function(e) {
    //     clearInterval(currentInterval);
    // });

});