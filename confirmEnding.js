/*
Confirm the Ending
检查字符串结尾

判断一个字符串(str)是否以指定的字符串(target)结尾。

如果是，返回true;如果不是，返回false。
 */
function confirmEnding(str, target) {
    str = str.toLowerCase(); //可以把形参重新赋值。
    // 请把你的代码写在这里
    if (str.length < target.length)
        return false;
    if (str.substr(-target.length) == target) {
        return true;
    } else return false;


}

console.log(
    confirmEnding("Bastian", "in"));