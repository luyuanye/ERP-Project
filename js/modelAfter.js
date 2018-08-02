
//<!--弹框超出可视窗口出现滚动条-->
 $(function(){
	 	formscroll();//初始调用formscroll()[form_model.js]
	 	$(window).resize(function(){formscroll()});//窗口拉动调用方法formscroll()[form_model.js]	 	
})
 

//*******************方法区************************
//模态框超出可视区域出滚动条
function formscroll(){
    var winH=$(window).height();
	var formh=winH-150;
	$(".scrollBox").css("max-height",formh);
}
