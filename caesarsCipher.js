/*
下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。

移位密码也就是密码中的字母会按照指定的数量来做移位。

一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。

写一个ROT13函数，实现输入加密字符串，输出解密字符串。

所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。
 */
function rot13(str) { // LBH QVQ VG!
    // 请把你的代码写在这里
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var t = str.charCodeAt(i);
        if (t >= 65 && t <= 77)
            arr.push(String.fromCharCode(t + 13));
        else if (t > 77 && t <= 90)
            arr.push(String.fromCharCode(t - 13));
        else arr.push(str.charAt(i));
    }
    str = arr.join("");
    return str;
    // str = str.map(
    //   function(val){
    //
    //       return String.fromCharCode( val.charCodeAt(0)+13);
    //   }
    // );
    //
    // return str;

}

console.log(
    rot13("SERR PBQR PNZC"));