$(document).ready(function () {

    $('.owl-one').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        navText: ['<span class="mdi mdi-chevron-left"></span>', '<span class="mdi mdi-chevron-right"></span>'],
        responsive: {
            0: {
                items: 1,
                margin: -16,
                dots: false,
                nav: false
            },
            768: {
                items: 4,
                // nav: false,
                margin: 32,
                loop: false,
                dots: false
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop: true,
        margin: 32,
        responsiveClass: true,
        nav: true,
        navText: ['<span class="mdi mdi-chevron-left"></span>', '<span class="mdi mdi-chevron-right"></span>'],
        responsive: {
            0: {
                items: 1,
                margin: -16,
                dots: false,
                nav: false
            },
            768: {
                items: 3,
                // nav: false,
                loop: false,
                dots: false
            }
        }
    });

    $('.menu-icon').click(function () {
        $('.nav-menu').addClass('active');
    })
    $('.menu-close-icon').click(function () {
        $('.nav-menu').removeClass('active');
    })
    $('.nav-item').click(function () {
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.category-list').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });


    $('.select .top').click(function () {
        $(this).siblings('.body').toggleClass('active');
    })
    $('.select li').click(function () {
        $('.select .top p').text($(this).text());
        $('.select').find('.body').removeClass('active');
    });
    $('.select .overlay').click(function () {
        $('.select').find('.body').removeClass('active');
    });
})