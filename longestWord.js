/*
Find the Longest Word in a String
找出最长单词

在句子中找出最长的单词，并返回它的长度。

函数的返回值应该是一个数字。

 */

function findLongestWord(str) {
    // 请把你的代码写在这里
    var array = str.split(" ");
    var len = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > len)
            len = array[i].length;
    }
    return len;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));