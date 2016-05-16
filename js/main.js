(function () {
	var oMin=document.getElementById('minNum');
	var oMax=document.getElementById('maxNum');
	var oInt=document.getElementById('isInt');
	var oFloat=document.getElementById('isFloat');
	var oDecnum=document.getElementById('decimalNum');
	var oSta=document.getElementById('start');
	var oNum=document.getElementById('numbers');
	var oRes=document.getElementById('result');
	var oRadios=document.getElementsByName('radio-rand');
	var oRadios_s=document.getElementsByName('radio-sort');

	EventUtil.addHandler(oSta,'click',handle);//绑定事件

	function handle() {
		//保证min、max不为空
		if (oMin.value==''||oMax.value=='') {alert('请输入正确的最大值最小值');return null;}
		var min=Number(oMin.value);
		var max=Number(oMax.value);
		var n=Number(oNum.value);
		var method,method_s;
		var result=[];
		if (min!='NaN'&&max!='NaN'&&n&&min<=max) {//保证min、max以及n格式正确
			_init();//获取格式
			for (var i = 0; i < n; i++) {
				
				var res=getRadomNumer.range(method,min,max);
				
				if (oInt.checked) {
					//如果选择了整数，则需要保证输出个数在范围之内
					if (max-min+1<n) {alert('输出个数太多啦！');break;}
					res=Math.floor(res);
					console.log(res);
					isRepeat(result,res,min,max,method);//检测重复
				}else{
					//保留小数默认为保留全部小数
					if (oDecnum.value) {
						res=new Number(res);
						res=parseFloat(res.toFixed(oDecnum.value));
					}
					isRepeat(result,res,min,max,method);//检测重复
				}
			}
			//排序
			result=method_s(result);
			oRes.innerHTML=result;
		}else{
			alert('请输入正确的最大值最小值和个数');
		}
		function _init() {
		//选择随机方式，默认原生
			for (var i = 0; i < oRadios.length; i++) {
				if(oRadios[i].checked)
				{
					switch(oRadios[i].id){
						case "MATH":
						  method=Math.random;
						  break;
						case "LCG":
						  method=getRadomNumer.LCG;
						  break;
						case "MS":
						  method=getRadomNumer.MS;
						  break;
						case "MT":
						  method=getRadomNumer.MT;
						  break;
					}
				}
			}
			//选择排序方式，默认原生
			for (var i = 0; i < oRadios_s.length; i++) {
				if(oRadios_s[i].checked)
				{
					switch(oRadios_s[i].id){
						case "Native":
						  method_s=sorts.sorts;
						  break;
						case "Quick":
						  method_s=sorts.quickSort;
						  break;
						case "Bubble":
						  method_s=sorts.bubbleSort;
						  break;
						case "Insert":
						  method_s=sorts.insertSort;
						  break;
					}
				}
			}
		}
	}


	function isRepeat(result,res,min,max,method) {
		//检测是否重复
		if (result.length) {
			do{
				var a=0;
				// alert(result.length);
				for (var j = 0; j < result.length; j++) {
					if(result[j]==res||res>max){
						a=1;
						break;
					}
				}
				if(!a){
					result[result.length]=res;
				}else{
					res=getRadomNumer.range(method,min,max);
					if(oInt.checked){
						res=Math.floor(res);
					}else{
						if (oDecnum.value) {
							res=new Number(res);
							res=parseFloat(res.toFixed(oDecnum.value));
						}
					}
				}
			}while(a);
		}else{
			result[result.length]=res;
		}
	}
})()