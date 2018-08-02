$(function() {
	$('#page-header-top').load('../inc/page-header-top.html');
	$('#page-header-menu').load('../inc/page-header-menu.html');
	$('#content').load('../inc/content.html');
	$('#page-footerModel').load('../inc/page-footerModel.html');
});

var getRequest = function() {
	var url = location.search; //获取url中"?"符后的字串 
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

//********************************添加tab*********************************

var tabI = 0;
var tabW = 0;
var tabIndex = 0;
var addTab = function(title, url, key, icon, obj) {
	if(obj !== 'parentA') {
		$(".nav-link").removeClass("active"); //删除所有高亮
		$(obj).addClass("active"); //当前导航触发的高亮
	}
	/*列表页也走这里也走refreahtab，如果是列表子集只走这里*/
	var isflag = true;
	if(tabW == 0) {
		tabW = $('#tblIndexLI').width(); //www首页li的宽
	}
	$('#menuBar li a').each(function(index, item) {
		if('a_' + key == item.id) { //判断是否出现过			
			tabIndex = index; //tabIndex就是索引			
			var yxzW = 0;
			var ulboxW = $("div.ulbox").width();
			for(var i = 0; i < tabIndex + 1; i++) {
				yxzW += $('#menuBar li:nth-of-type(' + i + ')').width();
			}
			//			console.log("已经存在是第"+tabIndex+"个li");
			//			console.log("已经存在当前的ul宽"+tabW);
			//			console.log("当前点击的前几个li的和"+yxzW);
			//			console.log("当前ul盒子宽"+ulboxW);
			//此时做判断ul-box是放当前高亮li之前的li的盒子；【div.ulbox是个变量随窗口走的】//	console.log(tabW-ulboxW);
			if(tabW > ulboxW && tabW - ulboxW > yxzW) {
				var newkey = $("#b_" + key).prop("outerHTML");
				$('#menuBar #b_' + key).remove();
				$('#menuBar').append(newkey);
			}
			isflag = false;
			return;
		}
	});

	if(isflag) { //没出现过

		var sHtml = '';
		sHtml += '<li class="" id="b_' + key + '" onclick="refreshTab(\'' + key + '\',\'' + url + '\',this);"  data-id="' + key + '">';
		sHtml += '<a href="#' + key + '"  data-toggle="tab" aria-expanded="true" id="a_' + key + '" alt="' + key + '"  style="padding:10px 28px 10px 15px;">';
		sHtml += '<i class="' + icon + '"></i> ';
		sHtml += title;
		sHtml += '<span aria-hidden="true" class="close" onclick="closeTab(\'' + key + '\');" style="position:absolute; top:3px; right:3px;width:10px;height:10px;"></span>';
		sHtml += '</a></li>';
		$('#menuBar').append(sHtml);
		var sContentHtml = '';
		sContentHtml += '<div class="tab-pane" id="' + key + '"></div>';
		$('#menuBarContent').append(sContentHtml);
		tabI++;
		tabW += $('#b_' + key).width(); ////给ul最新的宽		
		hasTabbtns();
	}
	$('#a_' + key).trigger('click'); //当前tab高亮【由导航触发的】
}
//*********************不是列表页子集的走这里***********************tab导航同步高亮
var refreshTab = function(key, url, obj) {
	if(key.indexOf('_') != -1){//则("key字符串包含字符——");		
		var parentAtab = key.substring(0, key.indexOf("_"));				
		var numdiv = $('.nav-link[date-num=' + parentAtab + ']');
		if($('.page-sidebar-menu').find(numdiv).length > 0) {			
			numdiv.trigger('click');					
		}	
	}
	$('#' + key).load(url, function() {
		return false;
	});
	var newTABliAttr = $(obj).attr("data-id");
	var numdiv = $('.nav-link[date-num=' + newTABliAttr + ']');
	if($('.page-sidebar-menu').find(numdiv).length > 0) {
		var silderAttr = $('.page-sidebar-menu .nav-link[date-num=' + newTABliAttr + ']');
		$(".page-sidebar-menu .nav-link").removeClass("active"); //删除所有高亮   
		silderAttr.addClass("active"); //当前导航触发的高亮    
		var dd = silderAttr.parents(".sub-menu").parent(".nav-item").hasClass("open");
		var slideSpeed = parseInt($(".page-sidebar-menu").data("slide-speed")); //属性2
		if(!dd) {
			silderAttr.parents(".sub-menu").parent(".nav-item").siblings(".open").find(".arrow").removeClass("open");
			silderAttr.parents(".sub-menu").parent(".nav-item").siblings(".open").find(".sub-menu").slideUp(slideSpeed);
			silderAttr.parents(".sub-menu").parent(".nav-item").siblings(".open").removeClass("open");
			silderAttr.parents(".sub-menu").parent(".nav-item").addClass("open");
			silderAttr.parents(".sub-menu").parent(".nav-item").find(".arrow").addClass("open");
			silderAttr.parents(".sub-menu").parent(".nav-item").find(".sub-menu").slideDown(slideSpeed);
		}
	}

}

// *******************************删除tab***********************************
var closeTab = function(key) {
	//	event.stopPropagation();//阻止事件冒泡	
	//兼容火狐浏览器		  
	var  e = arguments.callee.caller.arguments[0] || event;  //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容  	  
	if (e  &&  e.stopPropagation)  {      
		e.stopPropagation();    
	} 
	else 
		if (window.event)  {      
			window.event.cancelBubble  =  true;    
		} 
	//event.preventDefault();//阻止自身行为	   
	   if(e  &&  e.preventDefault) {    
		e.preventDefault(); //阻止自身行为       
		   
	} else if(window.event) {    
		e.returnValue = false; //阻止自身行为       
		   
	}

	var tabIndex = 0;
	tabW = tabW - $('#b_' + key).width();
	//做是否href中含有"_"[有便是属于列表子集页面],[如果有判断其父级页面tab是否在tab.ul中已展示,如果没有展示]去导航找对应的父级触发   console.log(key.substring(0, key.indexOf("_")))

	if(key.indexOf('_') != -1){//则("key字符串包含字符——");
		HasSubset(key);
	}else{
		ZC(key);
	}
	function HasSubset(key){
		var parentAtab = key.substring(0, key.indexOf("_"));
		$('#a_' + key).parent().remove();
		var numdiv = $('.nav-link[date-num=' + parentAtab + ']');
		if($('.page-sidebar-menu').find(numdiv).length > 0) {			
			numdiv.trigger('click');					
		}	
		$('#menuBar').width(tabW); //给ul最新的宽
		hasTabbtns();
	}
	function ZC(key) {
		$('#menuBar li a').each(function(index, item) {
			if('a_' + key == item.id) {
				tabIndex = index;
				return;
			}
		});
		var liL = $('#a_' + key).parent("li");
		var ulL = $('#a_' + key).parent("li").parent("ul");		
		if(liL.hasClass("active")) {
			//console.log(liL.next().length)	
			if(liL.next().length <= 0) {
				//最后一个展示前一个
				tabIndex = tabIndex - 1;
			} else {
				//展示后面的
				tabIndex = tabIndex + 1;
			}
			$('#menuBar li a').each(function(index, item) {
				if(index == tabIndex) {
					$(item).trigger('click');
				}
			});
		}
		$('#a_' + key).parent().remove();
		$('#menuBar').width(tabW); //给ul最新的宽
		hasTabbtns();
	}
}
//做窗口自适应
$(window).resize(function() {
	hasTabbtns();
	//自适应menuBarContent盒子的居上高度，小屏不做fixed
	if($('html').width() > 991) {
		$('#menuBarContent').css("margin-top", "41px");
	}
});
//tab方法区【判断是否超出放tab的盒子】
function hasTabbtns() {
	$('.ulbox').width($('.tabbable').width());
	// $('#menuBarContent').css("margin-top","40px");
	//console.log($('.ulbox').width())
	var runsize = 40; //每次移动的距离
	var lrwidth = 20; //左右箭头宽度 
	var ul = $('#menuBar');
	var liLength = 25;
	$('#menuBar').width(tabW + liLength); //给ul动态宽	
	if($('#menuBar').width() > $('.tabbable').width()) { //ul超出父级盒子			
		$("#tabBtns").show(); //箭头按钮显示
		$('#menuBar').css({
			"position": "absolute",
			"right": lrwidth,
			"z-index": 998
		}); //ul定位
		if($('html').width() < 991) {
			$('#menuBarContent').css("margin-top", "41px"); //ul脱离平流，兄弟下移ul高度	
		}
		$("#tabBtns").find('.fa-arrow-left,.fa-arrow-right').click(function() {
			var initRight = parseInt(ul.css('right')); // 当前UL初始 right 位置；       				
			if($(this).hasClass('fa-arrow-right')) { //向左       					
				if(Number(parseInt(ul.css('right'))) > -runsize * 2) { // 如果UL当前居右的值小于一次移动所需的40px；
					return ul.css('right', lrwidth + 'px');
				} else {
					ul.css({
						'right': initRight + runsize
					}); // 每次移动40px	
				}
			} else { //向右       				
				if(ul.width() + parseFloat(ul.css("right")) - $('.tabbable').width() < runsize) { // 如果UL当前居右的值小于一次移动所需的40px；	       					
					return ul.css({
						'right': $('.tabbable').width() - (ul.outerWidth())
					}); // ul 居左位20px
				} else {
					ul.css({
						'right': initRight - runsize
					}); // 每次移动40px
				}
			}
		})
	} else {
		$('.tabbable').find('#tabBtns').css("display", "none"); // 左右方向按钮隐藏；
		ul.css({
			"position": "static",
			"width": "100%"
		});
		if($('html').width() < 991) {
			$('#menuBarContent').css("margin-top", "0px");
		}
	}
}
//视频模块*****加载页面ajax静态获取方法
var ajaxLoadfun = function() {
		function loadPage(boxtop, boxcont, firstpage) {
			boxtop.find('a').each(function() {
				ajax(firstpage); //初始状态页面显示图表
				$(this).click(function() {
					var dataPage = $(this).attr('data-page');
					boxtop.find("li").removeClass("action");
					$(this).parent("li").addClass('action'); //tab样式切换[删除]
					ajax(dataPage); //内容切换
				})
			})
			//***提出子页面请求方法***
			function ajax(page) {
				$.ajax({
					type: "get",
					url: page + ".html",
					async: true,
					success: function(data) {
						boxcont.empty();
						boxcont.html(data);
					}
				});
			}
		}
		return {
			init: function(boxtop, boxcont, firstpage) {
				loadPage(boxtop, boxcont, firstpage);
			}
		};}()