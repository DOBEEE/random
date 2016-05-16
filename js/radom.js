var getRadomNumer={

	range:function (fn,min,max) {
		//设置范围
		var res=(fn()*(max-min+1))+min;
		return res;
	},

	LCG:function () {
		//线性同余法
		// 递归公式：Nj+1=(A*Nj+B) (mod M);
		// A,B,M为产生器设定常数;
		// 1.B,M互质
		// 2.M的所有质因子的积能整除A-1；
		// 3.若M是4的倍数，A-1也是；
		// 4.A,B,N_0都比M小；
		// 5.A,B是正整数。
		var t_start = Number(Date.now());
		//使时间延迟50ms，使种子不同
		while ( t_start + 50 > Number(Date.now()) ){};
		var rand_seed=Date.now();//系统时间作为种子
		rand_seed=(rand_seed*9301+49297)%233280;
		rand_seed=(rand_seed*9301+49297)%233280;//两次同余再次变更种子
		return rand_seed/233280;
	},
	
	init:4782332165,//平方取中法的初始值10位
	MS:function () {
		//平方取中法
		getRadomNumer.init=Math.pow(getRadomNumer.init,2).toString().split('');
		if (getRadomNumer.init.length<20) {
			//不足20位时补0
			for (var i = 0; i < 20-getRadomNumer.init.length; i++) {
				getRadomNumer.init.unshift(0);
			}
		}
		// 取中间10位数
		getRadomNumer.init=getRadomNumer.init.slice(5,15);
		getRadomNumer.init=parseInt(getRadomNumer.init.join(''));

		return getRadomNumer.init/1e10;
	},
	
	MT:function () {
		//梅森旋转法
		var t_start = Number(Date.now());
		while ( t_start + 50 > Number(Date.now()) ){};//延迟50ms
		var seed1=rand(Date.now());//系统时间作为种子
		function rand(seed) {
			var MT =new Array(624);
	    var idx=0;
			var i,p;
	    MT[0] = seed;
	    for (i=1; i < 624; i++) {   
	      p = 1812433253 * (MT[i-1] ^ (MT[i-1] >> 30)) + i;  
	      MT[i] = p & 0xffffffff;  
	    }  
	    var i;  
	    var y;  
	    for (i = 0; i < 624; i++) {  
	        y = (MT[i] & 0x80000000) + (MT[(i+1) % 624] & 0x7fffffff);  
	        MT[i] = MT[(i + 397) % 624] ^ (y >> 1);  
	        if (y % 2 != 0) { 
	          MT[i] = MT[i] ^ parseInt("2567483615l"); 
	        }  
	    } 
	   	var y = MT[idx];  
	    y = y ^ (y >> 11);  
	    y = y ^ ((y << 7) & parseInt("2636928640l"));  
	    y = y ^ ((y << 15) & parseInt("4022730752l"));  
	    y = y ^ (y >> 18);  

	    idx = (idx + 1) % 624;
	    return y; 
		}
		var seed2=rand(seed1);//两次旋转变更种子

    return '0.'+seed2;
	}

}