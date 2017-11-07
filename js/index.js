/**
 * Created by user on 2017/11/3.
 */
// 头部导航效果

window.onscroll=function (argument) {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var w= document.body.clientWidth;
    if (t>=50 & w>1100) {
        $('.head').addClass('head-two');
        $('.head-con').addClass('head-con-two');

    }else if(t<50){
        $('.head').removeClass('head-two');
        $('.head-con').removeClass('head-con-two');
    }
}

function toggleNav(){
    $("#nav-toggle").toggleClass(" toggle-animate");
    $("body").toggleClass("open-nav");
}
$("#nav-toggle,#mask-layer").on("click",function(){
    toggleNav();
});

$('.head-lis>li').click(function () {
    $(this).addClass("head-lis-active");
    $(this).siblings().removeClass("head-lis-active");
})
// 头部轮播
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,

    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable: true,

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',


})
// 教师轮播
var swiper = new Swiper('.swiper-container1', {
    // loop: true,
    pagination: '.swiper-pagination1',
    paginationClickable: true,
    nextButton: '.swiper-button-next1',
    prevButton: '.swiper-button-prev1',
    slidesPerView: 5,
    spaceBetween: 50,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

// 动态数字
var options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
};
var demo = new CountUp("myTargetElement", 110000, 120000, 0, 2.0, options);
var demo2 = new CountUp("myTargetElement2", 1000, 3000, 0, 2.0, options);
var demo3 = new CountUp("myTargetElement3", 0, 900, 0, 2.0, options);
var demo4 = new CountUp("myTargetElement4", 5000, 8300, 0, 2.0, options);
$(window).scroll(function() {
    if ($(window).scrollTop() >= 800) {
        demo.start();
        demo2.start();
        demo3.start();
        demo4.start();
    }
});

// 特色课程部分pc端
$('.schoolday-lis>li').mouseover(function () {
    $(this).addClass('active').siblings('li').removeClass('active');
    $(this).find('video')[0].play();
    $(this).children('.popup').addClass('popup1');
});
$('.schoolday-lis>li').mouseleave(function () {
    $(this).find('video')[0].pause();
    $(this).children('.popup').removeClass('popup1');
});

$('.schoolday-lis>li').click(function () {
    window.location.href='coursePlay.html'
})
// 特色课程移动端
$('.schoolday-m>li').click(function () {
    $(this).addClass('active-m').siblings('li').removeClass('active-m')
})


// 新闻列表部分
$('.news-con-rig>li').mouseover(function () {
    $(this).addClass('active').siblings('li').removeClass('active');
})


