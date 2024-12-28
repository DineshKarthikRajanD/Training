// 1.Assignment Operator

var a = 10;
var b = 2;

// 2.Arithemtic Operator

var sum = a + b;
var diff = a - b;
var mul = a * b;
var divi = a / b;
var modu = a % b;

console.log(sum, diff, mul, divi, modu);

// 3.Relational Operator
s = 30
let dif = "30"
if(sum === diff)
{
    console.log("they are equal")
}
else{
    console.log("not equal")
}

// 4.Logical Operator

if((sum >= diff) && ((divi != modu) || (divi <= mul)))
{
    console.log("greater")
}
else{
    console.log("not greater")
}

// 5.Bitwise Operator

console.log(a << b)
console.log(a >> b)
console.log(a & b)

// 6.Ternary Operator

const age = 20
let res = (age >= 20) ? "elegible" : "not elegible"
console.log(res)