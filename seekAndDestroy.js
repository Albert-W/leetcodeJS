/*
Seek and Destroy
摧毁数组

金克斯的迫击炮！

实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
 */
function destroyer(arr) {
    // 请把你的代码写在这里
    var len = arguments.length;
    var tag = [].slice.call(arguments);

    arr = arr.filter(
        function (val) {
            for (var i = 1; i < len; i++) {
                if (val == tag[i])
                    return false;

            }
            return true;
        }
    );

    return arr;
}

console.log(
    destroyer([1, 2, 3, 1, 2, 3], 2, 3));