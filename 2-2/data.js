//先把人名和杀手的总值打乱然后随机分配下去
var oBut=document.getElementById("but")
var oP=document.getElementById("p-img");
var oi=document.getElementById("o-img");
var num = document.getElementById("Int1").value;
document.onkeydown=function(event) {//加个键盘点击事件
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) { // enter 键
        oB();                 //要做的事情
    }
}
oBut.onclick=function oB() {
        var num = document.getElementById("Int1").value;//获取Int1的value
        if (num > 18||num < 4) {//判断num是不是>18并且大于4
            alert("玩家数量为4-18,也不要不填啊喂！")//如果是的话弹出这个
        }
        else {//反之进行以下代码
                A()
            location.href ="Licensing.html"
            }
        }
function A() {
    var num = document.getElementById("Int1").value;
    document.getElementById("civ").innerHTML = (Math.ceil(num / 4));//平民的总人数=num取余
    var Civ = document.getElementById("civ").innerHTML;
    var Kil = document.getElementById("kil").innerHTML = num - Civ;//杀手人=num减平民的人数
    var C = new Array(Civ);
    for (var i = 0; i < Civ; i++) {
        C[i] = "杀手";
    }
    var K = new Array(Kil);
    for (var i = 0; i < Kil; i++) {
        K[i] = "平民";
    }
    var Nn = C.concat(K);
    Nn.sort(function (b) {
        return 0.5 - Math.random()
    })
     console.log(Nn);
   /* oNn= JSON.stringify(Nn);
    localStorage.sth = oNn;*/
    oNn = JSON.stringify(Nn);
    sessionStorage.arrTostring = oNn;//存入
    console.log("数组变成字符串存储" + Nn);
}
