/*
Sum All Numbers in a Range
我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。

最小的数字并非总在最前面。
这是一些对你有帮助的资源:

Math.max()
Math.min()
Array.reduce()
 */
function sumAll(arr) {
    if (arr[1] < arr[0])
        return sumAll(arr.reverse());
    var sum = 0;
    for (var i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
}

console.log(
    sumAll([1, 4]));