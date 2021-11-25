$(function(){
    $('.hamburger-button__box').click(function(){
        $(this).toggleClass('active');
        $('#header-nav').toggleClass('menu-in');
      });
});

$('a[href^="#"]').click(function(){
    var adjust = 50;
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
});
function delayScrollAnime(){
    var time = 0.3;
    var value = time;
    $('.section-skill__cards').each(function(){
        var parent = this;
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var childs = $(this).children();

        if(scroll >= elemPos - windowHeight && !$(parent).hasClass("play")){
            $(childs).each(function(){

                if(!$(this).hasClass("fadeUp")){

                    $(parent).addClass("play");
                    $(this).css("animation-delay", value + "s");
                    $(this).addClass("fadeUp");
                    value = value + time;

                    var index = $(childs).index(this);
                    if((childs.length-1) == index){
                        $(parent).removeClass("play");
                    }
                }
            })
        }else{
            $(childs).removeClass("fadeUp");
            value = time;
        }
    })
}
$(window).scroll(function(){
    delayScrollAnime();
});

function fadeInAnime(){
    $('.section-strong').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
        }else{
            $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
        }
    });
}

$(window).scroll(function(){
    fadeInAnime();
});

