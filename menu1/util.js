

//递归阶乘
     
   function sum(arr) {
     var len = arr.length;
     if(len == 0){
       return 0;
     } else if (len == 1){
       return arr[0];
     } else {
       return arr[0] * sum(arr.slice(1));
     }
   }	 
//数转阶乘数组
  function getArry(num){
	var arr=new Array();
	for(var i=num;i>0;i--){
		arr.push(i);
	}
	return arr;
  }
//数组公式
    var n=33;
    var r=6;
	
	var num=getArry(33);
	var rum=getArry(6);
	
	var last = sum(num)/(sum(rum)*sum(getArry(n-r)))
//求和1.7亿种选择	
	console.log(last);
	
	//去重排序
	function unique(arr) {
		var temp=Array.from(new Set(arr));
		return temp.sort();
	}
	
	// var fruits = [3,4,3,4,1,2,6];
	// var x1=unique(fruits);
	// console.log(x1);