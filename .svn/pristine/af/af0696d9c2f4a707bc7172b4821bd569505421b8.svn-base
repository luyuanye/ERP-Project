$(function(){	
	changeTab();
	$(window).resize(function(){	
      $(".ERPtabbox .tabErp a.tabErpA.on").trigger("click");
      changeTab();
	})	
	function changeTab(){	
		 ulPW=$('.ERPtabbox').width();		
		$(".ERPtabbox .tabErp a.tabErpA").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		var distance = -ulPW*index;
		$('.ERPtabbox .contentErpbox ul.contentErpboxUL').stop().animate({
			left:distance
		});
	    
	   /*判断什么时候出现最上面的按钮*/
	     if(index==0){
	     	$('.ERPtabbox .tabErp .tabErpBtns').css("display","block")
	     }else{
	     	$('.ERPtabbox .tabErp .tabErpBtns').css("display","none")
	     }
		
	});
	}
});