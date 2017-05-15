//定义事件加载函数
function addLoadEvent(func) {
	var oldonload=window.onload;
	if (typeof window.onload!='function') {
		window.onload=func;
	}else{
		window.onload=function() {
			oldonload();
			func();
		}
	}
};
$('.game1').click(function() {
    alert('请亡灵发言');
});
$('.game2').click(function() {
    alert('请玩家依次发言');
});