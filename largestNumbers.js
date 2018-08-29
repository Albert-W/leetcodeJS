/*
Return Largest Numbers in Arrays
找出多个数组中的最大数

右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。

提示：你可以用for循环来迭代数组，并通过arr[i]的方式来访问数组的每个元素。
 */
function largestOfFour(arr) {
    // 请把你的代码写在这里
    var res = []; //此处必须声明并初始化为[]
    for (var i = 0; i < arr.length; i++) {
        var max = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) max = arr[i][j];
        }
        res.push(max);
    }

    return res;
}

console.log(
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));