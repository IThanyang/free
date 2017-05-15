oNn= sessionStorage.arrTostring;//读取本地
Nn = JSON.parse(oNn);
var B = sessionStorage.numbox;
// document.createElemtorinnerHTML("<div><p>B<p/></div>");
console.log("读取字符串再转为数组" + oNn + "长度"+Nn.length);
//点击某个盒子杀人
var $evevnt =  $('.box');
$evevnt.on('click', function()
    {
        $(this).css("background-color","red"); //this点哪是哪 类似指针
        var A=$(this).index();
        console.log(A);
       sessionStorage.numbox = A;
    });
var B = sessionStorage.numbox;
$(".box")[B -1].style.backgroundColor='red';//因为索引是0开始的
console.log(B);