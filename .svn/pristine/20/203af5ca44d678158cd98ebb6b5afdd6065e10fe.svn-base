//==================================monitorSplitWindows.js代码=======================================

/**
 * name: monitorSplit.js*
 * author: ningmin
 * date: 2018-6-26
 * function: 监听窗口拖动事件* 
 */

//alert("ok");
//鼠标横向、竖向操作对象
var DrageventsFun = function(ids,leftW,rightW,lMinW,rminW) {
	var Dragevents = function(ids,leftW,rightW,lMinW,rminW) {
		var thisHorizontalObject, thisVerticalObject;
		//文档对象
		var doc = document;
		//查找横向分割栏【左右】
		var horizontalLabels = $(".hj-wrap").find('.hj-transverse-split-label');
		//查找竖向分割栏【上下】
		/*var verticalLabels = $(".hj-wrap").find('.hj-vertical-split-label');*/

		//判断窗体个数，并初始化窗体宽度【左右】//当做多个拖动的时获取不同拖动盒子，给每一个拖动盒子子集div赋值
		if($(".hj-wrap").length > 0) {
			$(ids).find(".container_left").width(leftW);
			$(ids).find(".container_right").width(rightW);
			//定义一个对象
			function PointerObject() {
				this.el = null; //当前鼠标选择的对象	
				this.clickX = 0; //鼠标横向初始位置
				this.clickY = 0; //鼠标竖向初始位置
				this.horizontalDragging = false; //判断鼠标可否横向拖动
				this.verticalDragging = false; //判断鼠标可否竖向拖动
			}

			//横向分隔栏绑定事件【左右】
			horizontalLabels.bind('mousedown', function(e) {
				thisHorizontalObject = new PointerObject();
				thisHorizontalObject.horizontalDragging = true; //鼠标可横向拖动
				thisHorizontalObject.el = this;
				thisHorizontalObject.clickX = e.pageX; //记录鼠标横向初始位置
			});

		}

		doc.onmousemove = function(e) {
			//鼠标横向拖动【左右】
			if(thisHorizontalObject != null) {
				if(thisHorizontalObject.horizontalDragging) {
					var changeDistance = 0;
					var nextDOM = $(thisHorizontalObject.el).parent().next();
					var prevDOM = $(thisHorizontalObject.el).parent();
					if(thisHorizontalObject.clickX >= e.pageX) { //判断是鼠标左移动了还是右移动了
						//鼠标向左移动
						changeDistance = Number(thisHorizontalObject.clickX) - Number(e.pageX); //初始鼠标x位置-现在拖动后鼠标x位置		
						if(prevDOM.width() - changeDistance > lMinW) { //让拖动的线现在居于x坐标【判断最小宽，不能再拖动的宽】		
							prevDOM.width(prevDOM.width() - changeDistance);
							nextDOM.width(nextDOM.width() + changeDistance);
							thisHorizontalObject.clickX = e.pageX;
						}
					} else {
						//鼠标向右移动
						changeDistance = Number(e.pageX) - Number(thisHorizontalObject.clickX);
						if(nextDOM.width() - changeDistance > rminW) {
							prevDOM.width(prevDOM.width() + changeDistance);
							nextDOM.width(nextDOM.width() - changeDistance);
							thisHorizontalObject.clickX = e.pageX;
						}
					}

				}
			}

			$(doc).mouseup(function(e) {
				//鼠标释放时判断是否有横向操作对象【左右】
				if(thisHorizontalObject != null) {
					thisHorizontalObject.horizontalDragging = false; //修改横向可拖动状态
					thisHorizontalObject = null; //当鼠标释放的时候，销毁横向对象
				}
			});
		}

	} /**/
	return {
		init: function(ids,leftW,rightW,lMinW,rminW)  {
			Dragevents(ids,leftW,rightW,lMinW,rminW);
		}
	}
}()