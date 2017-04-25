/**
 * Created by 韩阳 on 2017/4/2.
 */
//读取字符串再转为数组
oNn = localStorage.sth;
Nn = JSON.parse(oNn);
console.log("读取字符串再转为数组" + oNn + "长度"+Nn.length);
var ClicksNum = 1; //这变量是1 点击后的人数？
var TotalNum = 0; //这变量等于0  总人数？
function but() {
    if (ClicksNum >= (2*Nn.length)) { //如果1 >= 2乘以人数
        return location.href = "7-2/Task7-2.html";//身份查看完后进入下一个界面
    }
    else {
        if (ClicksNum % 2 == 0) { //不然判断1除以2余和0比较
            CheckiDentity();//偶数显示查看身份页
        }
        else {
            DeliverDentity();//基数显示传递身份页
        }
    }
    ClicksNum++;//每次循环加一 1+1
    console.log("点击数" + ClicksNum);
}

//偶数显示查看身份页
function CheckiDentity() {
    document.getElementById("S-identity").innerHTML=("查看" + (TotalNum + 2) + "号身份"); //0循环＋1+2
    document.getElementById("sp").innerHTML=( TotalNum  + 2);//0循环加一+2 
    document.getElementById("p-img").src="img/2.png"
    TotalNum++;
    console.log("编号" + TotalNum);
}

//基数显示传递身份页
function DeliverDentity() {
    if (TotalNum /*0*/== Nn.length - 1) { //0==人数数组的长度-1
        document.getElementById("S-identity").innerHTML=("查看法官台本");//身份显示完后，进入下一个页面
    }
    else {
        document.getElementById("sp").innerHTML=( TotalNum  + 2);
        document.getElementById("S-identity").innerHTML=("隐藏并传递到" + (TotalNum + 2) + "号");
        document.getElementById("p-img").src="img/3.png"
        document.getElementById("identity").innerHTML=Nn[TotalNum];
    }
    // ("角色:" + num[(TotalNum)]);//这个页面显示身份;//显示图片2
}