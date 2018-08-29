/*
Title Case a Sentence
句中单词首字母大写

确保字符串的每个单词首字母都大写，其余部分小写。

像'the'和'of'这样的连接符同理。
 */
function titleCase(str) {
    // 请把你的代码写在这里
    var s = str.toLowerCase();
    var array = s.split(" ");
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    return array.join(" ");
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
