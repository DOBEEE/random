var sorts={
	
	sorts:function(value) {
		//原生排序
		function compare(value1,value2) {
			if (value1<value2) {
				return -1;
			}else if(value1>value2){
				return 1;
			}else{
				return 0;
			}
		}
		return value.sort(compare);
	},

	quickSort:function(value) {
		//快速排序
		if (value.length <= 1) { return value; }//数组长度为1时，结束递归
　　var pivotIndex = Math.floor(value.length / 2);
　　var pivot = value.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < value.length; i++){
　　　　if (value[i] < pivot) {
　　　　　　left.push(value[i]);
　　　　} else {
　　　　　　right.push(value[i]);
　　　　}
　　}
　　return sorts.quickSort(left).concat([pivot], sorts.quickSort(right));
	},

	bubbleSort:function(value) {
		//冒泡排序
		var length = value.length;
		for(i=0; i<=length-2; i++) {
			for(j=length-1; j>=1; j--) {
				//对两个元素进行交换
				if(value[j] < value[j-1]) {
					temp = value[j];
					value[j] = value[j-1];
					value[j-1] = temp;
				}
			}
		}
		return value;
	},

	insertSort:function(value){
		//插入排序
    var temp=null;
    for(var i=1; i<value.length; i++){
      if(value[i]<value[i-1]){//只有要插入的元素小于已排好序的最大元素的时候才需要进行下面的操作
        temp=value[i];
        var p=i-1;
        while(temp<value[p] && p>=0){
          value[p+1]=value[p];//把大于要插入元素(temp)的已排好序元素位置往后挪一位
          p--;
        }
        value[p+1]=temp;
      }		
    }
    return value;
   }
}