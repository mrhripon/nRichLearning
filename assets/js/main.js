"use strict";
$(document).ready(function () {

    // Query For Header Sticky
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('fixed-header');
        }
        else {
            $('header').removeClass('fixed-header');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 667) {
            $('.floating-nav').addClass('show');
        }
        else {
            $('.floating-nav').removeClass('show');
        }
    });


    // one page floating nav activation 
    $('.float-nav-list').onePageNav()


    // Slick Activation for Course-area 
    $('.course-active').slick({
        infinite: false,
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


    // Slick Activation for educator-area
    $('.educator-active').slick({
        infinite: false,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        centermode: true,
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
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


    // Slick Activation for institue-area
    $('.institue-active').slick({
        infinite: false,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        centermode: true,
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-left"></i></button>',
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

    // Slick Activation for institue-area
    $('.institue-slider').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 1600,
        // nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-circle-right"></i></button>',
        // prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-circle-left"></i></button>'
    });


    // Slick Activation for expert-area
    $('.expert-slider').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-circle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-circle-left"></i></button>'
    });


    // Activation Nice-Select for Dropdown 
    $('.selection').niceSelect();


    // Query For make sticky mobile image in step-area 
    let viewPort = parseInt((window.innerHeight) / 2);
    let stickyElmentHeight = parseInt(document.getElementById('sticky-el').offsetHeight / 2);
    let margin = viewPort - stickyElmentHeight;
    $('.content, .sidebar').theiaStickySidebar({
        additionalMarginTop: margin
    });


    // Query for step-content observing 
    const stepArea = document.getElementById('step-area');
    const stepContent = document.querySelectorAll('.step-content');
    const changeAbleImage = document.querySelector('.step-img img');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(each => {
            if (each.isIntersecting) {
                let src = each.target.getAttribute('data-step');
                changeAbleImage.src = src;
            }

        })

    }, {
        threshold: 1
    })
    stepContent.forEach(each => {
        observer.observe(each)
    });


    // Query for Dragable Hamburger Menu 
    const fabElement = document.getElementById("floating-snap-btn-wrapper");
    const burger = document.querySelector('.js-burger');
    let oldPositionX,
        oldPositionY;

    const move = (e) => {
        if (!fabElement.classList.contains("fab-active")) {
            if (e.type === "touchmove") {
                fabElement.style.top = e.touches[0].clientY + "px";
                fabElement.style.left = e.touches[0].clientX + "px";
            } else {
                fabElement.style.top = e.clientY + "px";
                fabElement.style.left = e.clientX + "px";
            }
        }
    };
    const mouseDown = (e) => {
        console.log("mouse down ");
        oldPositionY = fabElement.style.top;
        oldPositionX = fabElement.style.left;
        if (e.type === "mousedown") {
            window.addEventListener("mousemove", move);
        } else {
            window.addEventListener("touchmove", move);
        }

        fabElement.style.transition = "none";
    };

    const mouseUp = (e) => {
        console.log("mouse up");
        if (e.type === "mouseup") {
            window.removeEventListener("mousemove", move);
        } else {
            window.removeEventListener("touchmove", move);
        }
        snapToSide(e);
        fabElement.style.transition = "0.3s ease-in-out left";
    };

    const snapToSide = (e) => {
        const wrapperElement = document.getElementById('main-wrapper');
        const windowWidth = window.innerWidth;
        let currPositionX, currPositionY;
        if (e.type === "touchend") {
            currPositionX = e.changedTouches[0].clientX;
            currPositionY = e.changedTouches[0].clientY;
        } else {
            currPositionX = e.clientX;
            currPositionY = e.clientY;
        }
        if (currPositionY < 50) {
            fabElement.style.top = 50 + "px";
        }
        if (currPositionY > wrapperElement.clientHeight - 50) {
            fabElement.style.top = (wrapperElement.clientHeight - 50) + "px";
        }
        if (currPositionX < windowWidth / 2) {
            fabElement.style.left = 40 + "px";
            fabElement.classList.remove('right');
            fabElement.classList.add('left');
        } else {
            fabElement.style.left = windowWidth - 60 + "px";
            fabElement.classList.remove('left');
            fabElement.classList.add('right');
        }
    };

    fabElement.addEventListener("mousedown", mouseDown);

    fabElement.addEventListener("mouseup", mouseUp);

    fabElement.addEventListener("touchstart", mouseDown);

    fabElement.addEventListener("touchend", mouseUp);
    fabElement.addEventListener("click", (e) => {
        if (
            oldPositionY === fabElement.style.top &&
            oldPositionX === fabElement.style.left
        ) {
            burger.classList.toggle('open');
            fabElement.classList.toggle("fab-active");
        }
    });

    $(window).on('load', function () {
        fabElement.style.top = '60%';
        fabElement.style.left = '40px';
    });





    //   Query For scroll back to top 
    var back = $('.back-to-top');
    back.on('click', function (event) {
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

}); //jQuery End 






