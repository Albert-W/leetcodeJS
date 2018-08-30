var s = "hello";
s += " world!";
var a = 10;
var b = ++a;
var c = b++;


// console.log(s + "\n");
// console.log(a);
// console.log(b);
// console.log(c);
//
// var my = new Array(3);
// my[0] = 1;
// my[1] = 1;
// my[2] = 1;
// my[4] = 10;
// console.log(my[4]); // 10
// console.log(my[3]); //undefined

var d = new Date();
console.log(d.getDay()); //2018-08-30T11:44:09.232Z
console.log(d.getDay());//4

console.log(d.getDate());//30
console.log(d.getFullYear());//2018;
console.log(d.getMonth()); //需要+1；
var n = s.indexOf("o", 4);

console.log(n);