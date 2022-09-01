// Слайдер первый экран
var mainScreenSlider = new Swiper(".main-screen__slider", {
    spaceBetween: 25,
    slidesPerView: 1,
    adaptiveHeight: true,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Слайдер Хиты продаж

var hitsSlider = new Swiper(".hits-slider", {
    spaceBetween: 17,
    slidesPerView: 4,
    slidesPerGroup: 4,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        560: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        767: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1023: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },

    },
});
// Слайдер фотогалерея
var photoGallereySlider = new Swiper(".photo-gallerey__slider", {
    spaceBetween: 31,
    slidesPerView: 1.5,
    loop: true,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        1023: {
            slidesPerView: 1.5,
        },

    },
});
// Слайдер новинки
var newSlider = new Swiper(".new-slider", {
    spaceBetween: 17,
    slidesPerView: 4,
    slidesPerGroup: 4,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        560: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        767: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1023: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
});
// Слайдер в большой карточке
var bigCardSlider = new Swiper(".big-card__slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Слайдер похожие товары
var similarSlider = new Swiper(".similar-slider", {
    spaceBetween: 17,
    slidesPerView: 4,
    slidesPerGroup: 4,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        560: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        767: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1023: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
});
// Переключаем картинки при наведении мышки на секции
(function ($) {
    $(function () {

        $('.product__indicator').on('mouseenter', function () {
            $(this).addClass('current').siblings().removeClass('current')
                .closest('.product__img').find('img').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
// Делаем математический рассчёт ширины индикатора в зависимости от того, сколько изображений в блоке
function indicatorWidth() {
    $('.product__indicators').each(function () {
        $(this).children('.product__indicator').css('width', '100' / ($(this).closest('.product__img').children('img').length + $(this).closest('.product__img').children('video').length) + "%");
    })
}
indicatorWidth();

// Аккордион в большой карточке

$('.accordion-head').each(function () {
    $(this).click(function () {
        $(this).toggleClass('active');
        $(this).next('.accordion__content').slideToggle();
    })
})

document.addEventListener('click', function () {
    $('.custom-select').removeClass('active');
})

$('.custom-select').each(function () {
    $(this).click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active').siblings().removeClass('active');
    })
    $(this).find('.select-menu__item').click(function () {
        $(this).closest('.custom-select').find('.custom-select__value').html($(this).html());
        $(this).closest('.custom-select').find('.custom-select__input').val($(this).html());
        $(this).addClass('hidden').siblings().removeClass('hidden');
    })
})

// Переносим навигацию на мобилке

function mobNav() {
    if (window.innerWidth <= 1025) {
        $('.header__top-nav').appendTo('.mobile-nav__box')
        $('.header__bottom-nav').appendTo('.mobile-nav__box')
        $('.header__tel').appendTo('.mobile-nav__box')
        $('.header__top-icon.favorite').appendTo('.mobile-nav__icons')
        $('.header__top-icon.user').appendTo('.mobile-nav__icons')
        $('.header__basket').appendTo('.mobile-nav__icons')
    } else {
        $('.header__top-nav').appendTo('.top-nav__box')
        $('.header__bottom-nav').appendTo('.bottom-nav__box')
        $('.header__tel').appendTo('.header__tel-box')
        $('.header__top-icon.favorite').appendTo('.header-favorite__box')
        $('.header__top-icon.user').appendTo('.header-user__box')
        $('.header__basket').appendTo('.header__basket-box')
    }
}
mobNav();
window.addEventListener('resize', function () {
    mobNav();
})
// Фильтр с чекбоксами
$('.checkbox-filter__head').click(function () {
    $(this).toggleClass('active');
    $('.checkbox-filter__menu').toggleClass('active');
})
// Моб меню
$('.burger').click(function () {
    $('.mobile-nav').fadeToggle(300);
    $('.header__top').toggleClass('white');
    $('body').toggleClass('fixed');
    $('.mobile-nav__icons').toggleClass('active')
    $(this).toggleClass('active');
})
$('.menu__chevron').click(function () {
    if (window.innerWidth < 1025) {
        $(this).parent('.menu__item-head').closest('.menu__item').find('.submenu').slideToggle();
        $(this).closest('.menu__item-head').toggleClass('active');
    }
})
// Поиск 
$('.search').click(function () {
    $('.header__search').toggleClass('active');
})

"use strict";
$(function () {
    $(".youtube").each(function () {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', { 'class': 'play' }));

        $(document).delegate('#' + this.id, 'click', function () {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', { 'frameborder': '0', 'src': iframe_url })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
});
