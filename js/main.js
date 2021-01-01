// ページスクロールの処理
$(function () {
    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 420) {
            $(".header-wrapper").addClass("active");
        } else {
            $(".header-wrapper").removeClass("active");
        }
    });
});

// ヘッダー画像の切り替え
(function ($) {
    $('header').bgSwitcher({
        images: ['img/fv-bgi_01@2x.jpg', 'img/fv-bgi_02@2x.jpg', 'img/fv-bgi_03@2x.jpg',], // 切り替える背景画像
        Interval: 2000, //切り替えの間隔 1000=1秒
        start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始
        loop: true, //切り替えをループする
        shuffle: false, //背景画像の順番をシャッフルする
        effect: "blind", //エフェクトの種類 (fade / blind / clip / slide / drop / hide)
        duration: 1000, //エフェクトの時間 1000=1秒
        easing: "swing", //エフェクトのイージング 
    });
});

//ドロワーメニューの処理
$(function () {
    $('.navbar_toggle').on('click', function () {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
        $('.menu').toggleClass('disappear');
    });

    $('.drawer-item').on('click', function () {
        $(this).toggleClass('open');
        $('.navbar_toggle').toggleClass('open');
        $('.menu').toggleClass('open');
        $('.menu').toggleClass('disappear');
    });
});