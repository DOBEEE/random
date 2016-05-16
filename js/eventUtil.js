var EventUtil={
	
	removeHandler:function (element,type,handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type,handler,false);
		} else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		} else{
			element["on"+type]=null;
		}
	},
	getEvent:function (event) {
		return event ? event:window.event;
	},
	getTarget:function (event) {
		return event.target||event.srcElement;
	},
	preventDefault:function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue=false;
		}
	},
	stopPropagation:function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble=true;
		}
	}
}
EventUtil.addHandler=function (element,type,handler) {
		if (document.addEventListener) {
			return function (element,type,handler) {
				element.addEventListener(type,handler,false);
			}
		} else if(document.attachEvent){
			return function (element,type,handler) {
				element.attachEvent("on"+type,handler);
			}
		} else{
			return function (element,type,handler) {
				element["on"+type]=handler;
			}
		}
	}();
console.log("我非常乐意为您的团队创造价值");
console.log("希望我可以有幸获得这个机会");
console.log("Fighting！");