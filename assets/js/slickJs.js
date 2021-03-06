
$(document).ready(function () {
    $('#clients-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '50px',
                }
            }
        ]
    })

    $('#process-slick').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '50px',
                }
            }
        ]
    })

    $('#icon-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            }
        ]
    })

    let bannerGif = $('.banner-gif').attr('lsrc');
    $('.banner-gif').attr('src',bannerGif);
    $('.banner-gif').show()
});

$(window).on("load resize",function(e){
    var bgHeight = $(".hero-section.new .right-side .main-title").innerHeight();
    $(".hero-section.new .right-side .gif-container .bg-element").css("height",bgHeight);

    var videoSecHeight = $(".video-section .video-section-wrapper").innerHeight();
    var imageHeight = $(".video-section .video-section-wrapper .video-container").innerHeight();
    var videoContainerTop = (videoSecHeight - imageHeight)/2;
    $(".video-section .video-section-wrapper .video-container").css("top",videoContainerTop);
});
