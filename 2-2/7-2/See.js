oNn = localStorage.sth;
Nn = JSON.parse(oNn);
console.log("读取字符串再转为数组" + oNn + "长度"+Nn.length);
//先点击杀人调到杀人页面 点击杀人后返回
$(".game").click(function()
    {
    	$(".wrap").css("display","none")
       	$(".S").css("display","block")
    })
    /*    $(".game").click(function()
        {
            $(".Day-see").attr("class", "gc");
        */
		/*if($(".game").click(function()
            {
                $(".Day-see").attr("class", "gc");
            })){
        	alert("请继续下一项活动")
		}*/

// $(".box").click(function()
// 	{
// 		$(".box-identify").style.background=red;
// 	})
/*function Geme()
{
	var obj=new Object();
	obj.Day=function()
		{
			"第"+this.Day"天"
		}
	obj.kill=function()
		{

		}	
}*/