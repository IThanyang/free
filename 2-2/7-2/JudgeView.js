/**
 * Created by 韩阳 on 2017/4/9.
 */
oNn = localStorage.sth;
Nn = JSON.parse(oNn);
console.log("读取字符串再转为数组" + oNn + "长度"+Nn.length);
for (var i = 0; i < Nn.length; i++) {
    var box = "<div class='box'> " +
                    "<div class='box-top'>" +
                        "<div class='box-identify'>"+
                           Nn[i]+
                        "</div>" +
                            "<div class='box-number'> "
                            + (i + 1) + "号" +
                        "</div>" +
                    "</div> " +
                "</div>";
    $(".A").append(box);
}