/*
Slasher Flick
截断数组

返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
 */

function slasher(arr, howMany) {
    // 请把你的代码写在这里
    var res;
    res = arr.slice(howMany);

    return res;
}

console.log(
    slasher([1, 2, 3], 3));