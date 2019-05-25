var globalUrl = 'http://ym-zh.cn/';
// var globalUrl = 'http://127.0.0.1:8848/公司官网/';
$('.mavList li').click(function() {
	var tarUrl = $(this).attr("data-url");
	if(tarUrl !== ""){
		window.location.href = globalUrl + tarUrl;
	}
})

//顶部导航栏鼠标移入事件
$('.mavList li').mouseover(function() {
	if ($(this).hasClass('active') == false) {
		//添加底部边框显示的动画
		$(this).find('.line').animate({
			width: '100%',
			borderBottomWidth: '6px'
		}, 100)
		//添加导航内容的动画并添加颜色
		$(this).find('span.txt').animate({
			top: '0px',
		}, {
			duration: 100,
			complete: function() {
				$(this).css("color", "#3ba8cf");
			}
		})
	}
})
$('.mavList li').mouseleave(function() {
	if ($(this).hasClass('active') == false) {
		$(this).find('.line').animate({
			width: '0',
			borderBottomWidth: '6px'
		}, 100)

		$(this).find('span.txt').animate({
			top: '0',
		}, {
			duration: 100,
			complete: function() {
				$(this).css("color", "#fff");
			}
		})
	}
})
//鼠标移入微信显示二维码
$('li.wx').mouseover(function() {
	$(this).find('.wxewm').show();
})
$('li.wx').mouseleave(function() {
	$(this).find('.wxewm').hide();
})


//鼠标移入微信显示二维码
$('li.tel').mouseover(function() {
	$(this).find('.telBox').show();
})
$('li.tel').mouseleave(function() {
	$(this).find('.telBox').hide();
})

//鼠标移入微信显示二维码
$('li.email').mouseover(function() {
	$(this).find('.emailBox').show();
})
$('li.email').mouseleave(function() {
	$(this).find('.emailBox').hide();
})

$(".goToLink").click(function() {
	var tarUrl = $(this).attr("data-url");
	window.location.href = globalUrl + tarUrl;
})
