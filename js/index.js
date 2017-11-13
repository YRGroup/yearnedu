/**
 * Created by user on 2017/11/3.
 */
// 头部导航效果

window.onscroll = function (argument) {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var w = document.body.clientWidth;
    if (t >= 50 & w > 1100) {
        $('.head').addClass('head-two');
        $('.head-con').addClass('head-con-two');
        $('.head-lis').addClass('head-lis-two');

    } else if (t < 50) {
        $('.head').removeClass('head-two');
        $('.head-con').removeClass('head-con-two');
        $('.head-lis').removeClass('head-lis-two');
    }
}

function toggleNav() {
    $("#nav-toggle").toggleClass(" toggle-animate");
    $("body").toggleClass("open-nav");
}
$("#nav-toggle,#mask-layer").on("click", function () {
    toggleNav();
});

// $('.head-lis>li').click(function () {
//     $(this).addClass("head-lis-active");
//     $(this).siblings().removeClass("head-lis-active");
// })
// 头部轮播
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: 4000,

    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable: true,

    // 如果需要前进后退按钮
    nextButton: '.button-next',
    prevButton: '.button-prev',


})
// 教师轮播
var swiper = new Swiper('.swiper-container1', {
    // loop: true,
    autoplay: 4000,
    pagination: '.swiper-pagination1',
    paginationClickable: true,

    nextButton: '.teacher-next',
    prevButton: '.teacher-prev',
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
    window.location.href = 'coursePlay.html'
})
// 特色课程移动端
$('.schoolday-m>li').click(function () {
    $(this).addClass('active-m').siblings('li').removeClass('active-m')
})


// 新闻列表部分
// $('.news-con-rig>li').mouseover(function () {
//     $(this).addClass('active').siblings('li').removeClass('active');
// })

// 教师弹出层
$('.teacher-con').on('click', function () {
    var popupText = $(this).next(".schoolpopup").html()
    layer.open({
        type: 1,
        shadeClose: true,
        title: false,
        area: ['640px'],
        shadeClose: true, //点击遮罩关闭
        content: popupText
    });
});
// 动画
AOS.init({
    offset: 200,
    duration: 300,
    easing: 'ease-in-sine',
  });

// 返回顶部
function WeixinTop(){
	this.init();
}
WeixinTop.prototype = {
	constructor: WeixinTop,
	init: function(){		
		this._initBackTop();
	},	
	_initBackTop: function(){
		var $backTop = this.$backTop = $('<div class="cbbfixed">'+
						'<a class="weixin cbbtn"">'+
							'<span class="weixin-icon"></span><div></div>'+
						'</a>'+
						'<a class="gotop cbbtn">'+
							'<span class="up-icon"></span>'+
						'</a>'+
					'</div>');
		$('body').append($backTop);
		
		$(".gotop").click(function(){
			$("html, body").animate({
				scrollTop: 0
			}, 800);
		});
		var timmer = null;
		$(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
            e = $(window).height();
            0 < d ? $backTop.css("bottom", "20px") : $backTop.css("bottom", "-90px");
			clearTimeout(timmer);
			timmer = setTimeout(function() {
                clearTimeout(timmer)
            },100);
	   });
	}
}
var WeixinTop = new WeixinTop();