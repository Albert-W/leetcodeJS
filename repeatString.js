/*
Repeat a string repeat a string
重复输出字符串

（重要的事情说3遍）

重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
 */
function repeat(str, num) {
    // 请把你的代码写在这里
    if (num < 0) return "";
    var res = "";
    for (var i = 0; i < num; i++) {
        res += str;
    }
    return res;
}

console.log(
    repeat("abc", 3));