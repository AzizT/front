var a = 2;
a = a - 1;
console.log(a);
// résultat attendu 1
a++;
console.log(a);
// résultat attendu 2
var b = 8;
b += 2;
console.log(b);
// résultat attendu 10
var c = a + b * b;
console.log(c);
// résultat attendu 102
var d = a * b + b;
console.log(d);
// résultat attendu 30
var e = a * (b + b);
console.log(e);
// résultat attendu 40
var f = a * b / a;
console.log(f);
// résultat attendu 10
var g = b / a * a;
console.log(g);
// résultat attendu 10