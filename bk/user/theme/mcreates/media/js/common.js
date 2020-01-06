//	スムーススクロールの処理
//	（<a href="#top">の様に記述すると滑らかにスクロールする。）
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;　//スクロール速度の調整
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
	
	
	 
// fade（マウスオーバー時にフェードしながら半透明化）
$(document).ready(function(){$(".fade").fadeTo(0,1.0);$(".fade").hover(function(){        $(this).fadeTo(300,0.7);    },    function(){        $(this).fadeTo(300,1.2);    });});
$(function() {
	$(".fade").css("background","#FFF");
});


// rollover（_offと末尾についた画像をオンマウスで_onとついた画像に切り替える）
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}

//ヘッダー固定
$(function() {
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('#GNAVI').addClass('fixed');
      $('#HEADER').addClass('fixed');
    } else {
      $('#GNAVI').removeClass('fixed');
      $('#HEADER').removeClass('fixed');
    }
  });
});