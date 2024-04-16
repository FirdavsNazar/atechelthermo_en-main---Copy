window.onfocus=function(){
}
window.onload=function(){
 window.focus(); // 현재 window 즉 익스플러러를 윈도우 최상단에 위치
window.moveTo(0,0); // 웹 페이지의 창 위치를 0,0 (왼쪽 최상단) 으로 고정
window.resizeTo(1370,930); // 웹페이지의 크기를 가로 1280 , 세로 800 으로 고정(확장 및 축소)
window.scrollTo(0,0); // 페이지 상단 광고를 바로 볼 수 있게 스크롤 위치를 조정
}

//Variable Setting
var am = new autoAnimation();

//Document Event;
$(start)
.on("click",".move",pageMove)
.on("click",".sitemap_open",sitemapOpen)
.on("click",".sitemap_close",sitemapClose)
.on("click", ".history_wr ul li", historyMove)
//.on("click",".page8 .pro_menu",proMenu)
//.on("click","#menu .menu_toggle",menuToggle)
// .on("click",".page1 ul li",changeIntroBg)
// .on("mouseenter",".page1 .move",startOn)
// .on("mouseleave",".page1 .move",startOff)

var bgm = new Audio('bgm/bgm.mp3');
bgm.volume = 1;
bgm.addEventListener('ended',function(){this.currentTime=0;this.play();},false);

//pageLoadEvent
function start(){
	am.classSetting().change({obj:$('.page1')}).play();
	bgm.play();

    $("#bgmswitch").on("click", function() {
		if($(this).data("switch")=="off") {
			$(this).data("switch","on");
			bgm.volume = 0;
			$("#bgmswitch").attr("src","images/sound_off.png");
		} else {
			$(this).data("switch","off");
			bgm.volume = 1;
			$("#bgmswitch").attr("src","images/sound_on.png");
		}
	})

    $("#menu .main").clone().appendTo("#sitemap")

	if(opener) opener.close();
}

//subPageChange
function pageMove(){
	var nowPageNo = $(this).data('menu');
	var pageNo = parseInt((nowPageNo).substr(5));
	subView(nowPageNo);
    sitemapClose();
    $("#menu").removeClass();

    var main_menu = 0;
    var sub_menu = 0;
    var white = false;
    $("#menu .main li").removeClass("on");
    switch(pageNo) {
        case 1: main_menu = 1; break;
        case 2: main_menu = 2; sub_menu = 1; break;
        case 3: main_menu = 2; sub_menu = 2; break;
        case 4: main_menu = 2; sub_menu = 3; break;
        case 5: main_menu = 3; sub_menu = 0; break;
        case 6: main_menu = 3; sub_menu = 0; break;
        case 7: main_menu = 4; sub_menu = 1; break;
        case 8: main_menu = 4; sub_menu = 1; break;
        case 9: main_menu = 4; sub_menu = 1; break;
        case 10: main_menu = 4; sub_menu = 1; break;
        case 11: main_menu = 4; sub_menu = 1; break;
        case 12: main_menu = 4; sub_menu = 1; break;
        case 13: main_menu = 4; sub_menu = 1; break;
        case 14: main_menu = 4; sub_menu = 2; break;
        case 15: main_menu = 4; sub_menu = 2; break;
        case 16: main_menu = 4; sub_menu = 2; break;
        case 17: main_menu = 4; sub_menu = 2; break;
        case 18: main_menu = 4; sub_menu = 2; break;
        case 19: main_menu = 4; sub_menu = 2; break;
        case 20: main_menu = 4; sub_menu = 3; break;
        case 21: main_menu = 4; sub_menu = 3; break;
        case 22: main_menu = 5; sub_menu = 0; break;
        case 23: main_menu = 6; sub_menu = 0; break;

    }
    if(main_menu>0) $("#menu .main > li:nth-of-type("+main_menu+")").addClass("on");
    if(sub_menu>0) $("#menu .main > li:nth-of-type("+main_menu+") .sub li:nth-of-type("+sub_menu+")").addClass("on");

    $("#menu").addClass("m"+main_menu);

    if(white) {
        $("#menu").addClass("white");
    } else {
        $("#menu").removeClass("white");
    }

    if(pageNo>1) {
        $("#menu_bar").css({"z-index" : 999});
            $("#menu_bar").fadeIn();
        // $("#menu_bar_bar").css({"z-index" : 999});
        // $("#logo").css({"z-index" : 999});
        } else {
            $("#menu_bar").css({"z-index" : 0});
            $("#menu_bar").fadeOut();
        // $("#menu_bar_bar").css({"z-index" : 0});
        // $("#logo").css({"z-index" : 0});
    }

  if(pageNo>1) {
    $("#menu_bar > .main").css({"z-index" : 999});
		$("#btn_nav").fadeIn();
    // $("#menu_bar_bar").css({"z-index" : 999});
    // $("#logo").css({"z-index" : 999});
	} else {
  	$("#menu_bar > .main").css({"z-index" : 0});
		$("#btn_nav").fadeOut();
    // $("#menu_bar_bar").css({"z-index" : 0});
    // $("#logo").css({"z-index" : 0});
  }

  if(main_menu==3 && sub_menu>0) {
    $("#film_menu").fadeIn();
    $("#film_menu ul li").removeClass('on');
    $("#film_menu ul li:nth-of-type(" + sub_menu + ")").addClass('on');
  } else {
    $("#film_menu").fadeOut();
  }

  if(main_menu==4 && sub_menu>0) {
    $("#pack_menu").fadeIn();
    $("#pack_menu ul li").removeClass('on');
    $("#pack_menu ul li:nth-of-type(" + sub_menu + ")").addClass('on');
  } else {
    $("#pack_menu").fadeOut();
  }

	$("#btn_nav img:nth-of-type(1)").data('menu',".page"+(pageNo-1));
	$("#btn_nav img:nth-of-type(2)").data('menu',".page"+(pageNo+1));
	if(pageNo==$(".page").length) { $("#btn_nav img:nth-of-type(2)").data('menu',".page1"); }
    else if(pageNo<=1) { $("#btn_nav img:nth-of-type(1)").data('menu',".page"+$(".page").length); }

	if($(this).hasClass('move')) { bgm.play(); }

    $(".scroll").animate({ scrollTop: 0 }, 200);

    // if(pageNo==4) {
    //     if( $("#bgmswitch").data("switch")=="off" ) {
    //         $("#bgmswitch").trigger("click");
    //     }
    // };

	// autoMove(pageNo);
}

//subView
function subView(menu){
	var callback, before;
	before = $('.wrap .active');
	callback = function(){
		callbackAnimation({type:'move',menu:menu});
	};
	if(typeof menu == "string" && !$('.nav '+menu).hasClass('active')){
		$('.nav .active').removeClass('active');
		$('.nav '+menu).addClass('active');
	}
	am.callbackfn = callback;
	am.change({obj:before,reverse:'reverse'}).play();
}

//callback
function callbackAnimation(option){
	var before,after,afterPart;
	switch(option.type){
		case 'move' :
			before = $('.wrap>.active');
			after  = $(option.menu);
		break;
	}
	before.fadeOut(300,function(){
		before.removeClass('active');
		$(this).removeAttr('style');
		after.fadeIn(300,function(){
			$(this).attr('style','');
			if(option.type == 'sub'){
				$('.sub>.active').removeClass('active');
				$('.sub,'+option.menu).addClass('active');
				am.change({obj:$('.sub-default,'+option.menu),reverse:'normal'}).play();
			} else {
				after.addClass('active');
				am.change({obj:after,reverse:'normal'}).play();
			}
		})
	})
}

if(checkBrowser()=='chrome') {
	// $("#bgmswitch").hide();
}

function checkBrowser(){
    var agent = navigator.userAgent.toLowerCase(),
        name = navigator.appName,
        browser = '';

    // MS 계열 브라우저를 구분
    if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
        browser = 'ie';
        if(name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
            agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
            browser += parseInt(agent[1]);
        } else { // IE 11+
            if(agent.indexOf('trident') > -1) { // IE 11
                browser += 11;
            } else if(agent.indexOf('edge/') > -1) { // Edge
                browser = 'edge';
            }
        }
    } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
        if(agent.indexOf('opr') > -1) { // Opera
            browser = 'opera';
        } else if(agent.indexOf('chrome') > -1) { // Chrome
            browser = 'chrome';
        } else { // Safari
            browser = 'safari';
        }
    } else if(agent.indexOf('firefox') > -1) { // Firefox
        browser = 'firefox';
    }

    return browser;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function sitemapOpen() {
    $("#sitemap").fadeIn();
}

function sitemapClose() {
    $("#sitemap").fadeOut();
}

function changeIntroBg() {
    $(this).parent().find("li").removeClass('on');
    $(this).addClass('on');
    $(".intro_bg img").removeClass("on");
    $(".intro_bg img:nth-of-type(" + ($(this).index()+1) + ")").addClass("on");
}

function menuToggle() {
    if($("#menu").hasClass('on')) {
        $("#menu").removeClass('on');
    } else {
        $("#menu").addClass('on');
    }
}

function certiOpen() {
    $("#certi_popup").css({'background-image': 'url(./images/certi/' + $(this).data("no") + '.png)'});
    $("#certi_popup").fadeIn();
}

function certiClose() {
    $("#certi_popup").fadeOut();
}

function videoOpen() {
    $("#video_popup iframe").hide();
    $("#video_popup iframe:nth-of-type(" + $(this).data("no") + ")").show();
    $("#video_popup").fadeIn();
    if( $("#bgmswitch").data("switch")=="off" ) {
        $("#bgmswitch").trigger("click");
    }
}

function videoClose() {
    $("#video_popup").fadeOut();
    for(var i=0; i<6; i++) {
        $("#video_popup iframe")[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    }
}

function historyMove() {
  $(this).parent().find("li").removeClass('on');
  $(this).addClass('on');
  $(".history").css("margin-left", ($(this).index()*-1200) + "px");
}



$(function() {
  $("#menu_wrap .close").click(function(){
    $("#menu_wrap").animate({'right': -63 + '%'})
  });

  $("#menu_bar").click(function(){
    $("#menu_wrap").animate({'right':0})
  });

 

  // $(".logo").click(function(){
  //   $("#menu_wrap").css({'right': -40 + '%'})
  //   $("#logo2").css({'left': -40 + '%'})
  //   $("#menu_bar").css({'right': -40 + '%'})
  // });

  $("#menu_wrap .main").click(function(){
    $("#menu_wrap").animate({'right': -63 + '%'});
  });

  $("#menu_bar").click(function(){
    $(".wrap::after").css('left',0)
  });

});

// 가로 드래그 슬라이드
let sliders = document.querySelectorAll(".slider")
let innerSliders = document.querySelectorAll(".slider-inner")
let presseds = [false,false]
let startx = []
let x = []

sliders.forEach((slider, index) => {
    slider.addEventListener("mousedown", e => {
        presseds[index] = true
        startx[index] = e.offsetX - innerSliders[index].offsetLeft
        slider.style.cursor = "grabbing"
    })

    slider.addEventListener("mouseenter", () => {
        slider.style.cursor = "grab"
    })

    slider.addEventListener("mouseup", () => {
        slider.style.cursor = "grab"
    })

    window.addEventListener("mouseup", () => {
        presseds[index] = false
    })

    slider.addEventListener("mousemove", e => {
        if (!presseds[index]) return
        e.preventDefault()
        x[index] = e.offsetX

        innerSliders[index].style.left = `${x[index] - startx[index]}px`
        checkboundary(index)
    })
})

function checkboundary(index) {
    let outer = sliders[index].getBoundingClientRect()
    let inner = innerSliders[index].getBoundingClientRect()

    if (parseInt(innerSliders[index].style.left) > 0) {
        innerSliders[index].style.left = "0px"
    } else if (inner.right < outer.right) {
        innerSliders[index].style.left = `-${inner.width - outer.width}px`
    }
}
