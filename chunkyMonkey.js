/*
Chunky Monkey
猴子吃香蕉, 分割数组

（猴子吃香蕉可是掰成好几段来吃哦）

把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
 */
function chunk(arr, size) {
    // 请把你的代码写在这里
    var res = [];
    for (var i = 0; i < arr.length; i = i + size) {
        res.push(arr.slice(i, i + size));
    }


    return res;
}

console.log(
    chunk(["a", "b", "c", "d"], 2));