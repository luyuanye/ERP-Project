/**
Core script to handle the entire theme and core functions

page-header-fixed page-sidebar-closed-hide-logo page-content-white page-sidebar-closed
**/
var Layout = function () {

    var layoutImgPath = 'layouts/layout/img/'; 
    var layoutCssPath = 'layouts/layout/css/';
    var resBreakpointMd = App.getResponsiveBreakpoint('md');
    var ajaxContentSuccessCallbacks = [];
    var ajaxContentErrorCallbacks = [];

    //处理主菜单555555 
    var handleSidebarMenu = function () {
        // handle sidebar link click
        $('.page-sidebar-menu').on('click', 'li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
     
            var that = $(this).closest('.nav-item').children('.nav-link');//一级导航有可能展开
            var hasSubMenu = that.next().hasClass('sub-menu');//一级导航a下一个 【可展开的兄弟导航sub-menu】
            var parent =that.parent().parent();//nav-item==》page-sidebar-menu  page-header-fixed
            var the = that;//
            var menu = $('.page-sidebar-menu');
            var sub = that.next();//一级导航a下一个 【有可能不能展开的兄弟导航a】
            
            var autoScroll = menu.data("auto-scroll");//属性1
            var slideSpeed = parseInt(menu.data("slide-speed"));//属性2
            var keepExpand = menu.data("keep-expanded");//属性3
            
            if (!keepExpand) {//如果没有属性3，导航收起来
                parent.children('li.open').children('a').children('.arrow').removeClass('open');
                parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
                parent.children('li.open').removeClass('open');
            }
            that.parent(".nav-item").siblings().removeClass("open");
            that.parent(".nav-item").siblings().find("a.nav-toggle .arrow").removeClass("open");
            that.parent(".nav-item").siblings().find(".sub-menu").slideUp(slideSpeed);        
            var slideOffeset = -200;
            //点击以及导航看是否是展开的，如果是展开的关闭，否则反之
            if (sub.is(":visible")) {//当前sub-menu是不是可见的[展开的]      
                $('.arrow', the).removeClass("open");
                the.parent().removeClass("open");
                sub.slideUp(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {//是文字导航情况
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        } else {
                            App.scrollTo(the, slideOffeset);
                        }
                    }
                });
                $(".page-content-wrapper .page-content").css("margin-left",200)
//             setTimeout(function(){
//            	    var newWW= $(".page-sidebar-wrapper").width();		            
//					console.log(22+newWW)
//					$(".page-content-wrapper .page-content").css("margin-left",newWW)
//            },150)

            } else if (hasSubMenu) {
                $('.arrow', the).addClass("open");
                the.parent().addClass("open");
                sub.slideDown(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        } else {
                            App.scrollTo(the, slideOffeset);
                        }
                    }
                });
//           
//            setTimeout(function(){
//            	    var newWW= $(".page-sidebar-wrapper").width();		            
//					console.log(22+newWW)
//					$(".page-content-wrapper .page-content").css("margin-left",newWW)
//            },150)

     
            }
            e.preventDefault();
            
        }); 
    };
   //处理边栏隐藏/显示6666666【文字图标导航切换】
    var handleSidebarToggler = function () { 
        $('body').on('click', '.sidebar-toggler', function (e) {//三杠切换
            var body = $('body');
            var sidebar = $('.page-sidebar');
            var sidebarMenu = $('.page-sidebar-menu');  
          
            //判断是文字导航还是图导航
            if (body.hasClass("page-sidebar-closed")) {//是图导航==》去切换到文字
                body.removeClass("page-sidebar-closed");
                sidebarMenu.removeClass("page-sidebar-menu-closed");
                 var slideSpeed = parseInt(sidebarMenu.data("slide-speed"));//属性2
                 //start 文字导航样式同步 [nm--start]  // 
                   var $jObect=$('.page-sidebar-menu li.nav-item > ul.sub-menu >li.nav-item > a.nav-link.active')	        	   
	             	if($jObect.length>=0) {                 		
	             		$jObect.closest(".page-sidebar-menu>li.nav-item").addClass("open");
	             	 $('.page-sidebar-menu li.nav-item.open').children('a').children('.arrow').addClass('open');
                     $('.page-sidebar-menu li.nav-item.open').children('.sub-menu:not(.always-open)').slideDown(slideSpeed);
	             	}else{
	             		$jObect.closest(".page-sidebar-menu>li.nav-item").removeClass("open");
	             		$('.page-sidebar-menu li.nav-item.open').children('a').children('.arrow').removeClass('open');
                        $('.page-sidebar-menu li.nav-item.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
	             	}	

            } else {                                     //是文字导航==》切换到图导航
                body.addClass("page-sidebar-closed");
                // ***********************切换到图导航先收起导航 //                 
                $('.page-sidebar-menu li.nav-item.open').children('a').children('.arrow').removeClass('open');
                $('.page-sidebar-menu li.nav-item.open').children('.sub-menu:not(.always-open)').slideUp();
                 //加类
                sidebarMenu.addClass("page-sidebar-menu-closed");    
                var objj=$('.page-sidebar-menu li.nav-item.open> ul.sub-menu >li.nav-item > a.nav-link.active');
                	//console.log(objj.length)//判断是否展开后点击了兄弟导航
                if(objj.length<=0){        //未点击   	
                	$('.page-sidebar-menu li.nav-item.open').removeClass("open");	
                }  
                var $jObect=$('.page-sidebar-menu li.nav-item > ul.sub-menu >li.nav-item > a.nav-link.active')	        	   
             	if($jObect.length>=0) {   //点击                 		
             		$jObect.closest(".page-sidebar-menu>li.nav-item").addClass("open");	             	
             	}else{
             		$jObect.closest(".page-sidebar-menu>li.nav-item").removeClass("open");	             		
             	}	 
                //start 图导航样式同步 [nm--start]  // 
	            $(".page-sidebar-menu li > a").on("click", function(e) {
	            	if($('.page-sidebar-menu li').has(".open")){
	                 	 $('.page-sidebar-menu li.nav-item.open').removeClass('open');
	                } 	            	
	        	    var $jObect=$('.page-sidebar-menu li.nav-item > ul.sub-menu >li.nav-item > a.nav-link.active')	        	   
	             	if($jObect.length>=0) {                 		
	             		$jObect.closest(".page-sidebar-menu>li.nav-item").addClass("open");	             	
	             	}else{
	             		$jObect.closest(".page-sidebar-menu>li.nav-item").removeClass("open");	             		
	             	}	                
	            });
	             //end 图导航样式同步 [nm--end]              
                if (body.hasClass("page-sidebar-fixed")) {
                    sidebarMenu.trigger("mouseleave");
                }
            }
            $(window).trigger('resize');
        });
    };

//3333333
    return {       
        initSidebar: function($state) { 
            handleSidebarMenu(); // 处理主菜单
            handleSidebarToggler(); // 处理边栏隐藏/显示           
        }, 	    
//22222
        init: function () {
            this.initSidebar(null);
        },
    };

}();
//11111
if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function() {    
       Layout.init(); // init metronic core componets
    });
}