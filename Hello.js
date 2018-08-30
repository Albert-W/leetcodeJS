var s = "hello";
s += " world!";
var a = 10;
var b = ++a;
var c = b++;


console.log(s + "\n");
console.log(a);
console.log(b);
console.log(c);

var my = new Array(3);
my[0] = 1;
my[1] = 1;
my[2] = 1;
my[4] = 10;
console.log(my[4]); // 10
console.log(my[3]); //undefined