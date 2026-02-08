$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.hamburger, nav a, .mask').on('click', function () {
        $('header').toggleClass('open');
    });

    $(document).on('click', function (e) {
        if ($('header').hasClass('open')) {
            if (!$(e.target).closest('header').length) {
                $('header').removeClass('open');
            }
        }
    });

    /*=================================================
    タブの切り替え処理
    ===================================================*/
    $('.tab').on('click', function () {
        const wrapper = $(this).closest('.tab_wrapper');
        const index = wrapper.find('.tab').index(this);

        wrapper.find('.tab').removeClass('active');
        $(this).addClass('active');

        wrapper.find('.content').removeClass('show');
        wrapper.find('.content').eq(index).addClass('show');

        $('.slider').slick('setPosition');
    });

    /*=================================================
    Slick
    ===================================================*/
    $(".slider").slick({
        autoplay: false,
        infinite: true,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '20px',
    });
    

    /*=================================================
    アコーディオンメニュー
    ===================================================*/
    $('.accordion').on('click', function () {
        details.removeAttr('open');
    });
    


    /*=================================================
    スムーススクロール、nav現在地表示
    ===================================================*/
    $(document).on('click', 'a[href*="#"]', function () {
        let time = 500;
        let target = $(this.hash);
        if (!target.length) return;
        let targetY = target.offset().top - 95;
        $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        return false;
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        var offset = 120;

        const sections = [
            { id: '#sec02', index: 1 },
            { id: '#sec06', index: 2 },
            { id: '#sec08', index: 3 },
            { id: '#sec09', index: 4 },
            { id: '#sec10', index: 5 },
            { id: '#sec11', index: 6 }
        ];

        $(".header-menu").removeClass("active");

        for (let i = sections.length - 1; i >= 0; i--) {
            let el = $(sections[i].id);
            if (el.length && scroll >= el.offset().top - offset) {
                $(`.header-menu:nth-child(${sections[i].index})`).addClass("active");
                break;
            }
        }
    });
});