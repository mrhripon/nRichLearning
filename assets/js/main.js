"use strict";

$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});



$('.course-active').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.educator-active').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centermode: true,
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
    prevArrow: '',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.institue-active').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    centermode: true,
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
    prevArrow: '',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.expert-slider').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-circle-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-circle-left"></i></button>'
});




window.addEventListener('load', function () {
    console.log('Document Loaded!');

})



//   Query For scroll back to top 
var back = $('.back-to-top');
back.on('click', function () {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 900);
})
$(window).on('scroll', function (event) {
    event.preventDefault();
    var self = $(this),
        height = self.height(),
        top = self.scrollTop();
    if (top > height) {
        back.addClass('visible');
    } else {
        back.removeClass('visible');
    }
})








