/*
Truncate a string
截断字符串

如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

切记，插入到字符串尾部的三个点号也会计入字符串的长度。

但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
 */
function truncate(str, num) {
    // 请把你的代码写在这里
    if (num <= 3) {
        return str.substr(0, num) + "...";
    } else if (num < str.length) {
        return str.substr(0, num - 3) + "...";
    } else return str;


}

console.log(
    truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));