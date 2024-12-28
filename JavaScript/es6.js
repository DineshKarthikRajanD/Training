// 1. Variables
// var, let, const -> refer to declaration.js

// 2. Arrow Function

// arrowFun = (studentsDept) => {
//   console.log(studentsDept);
//   return studentsDept[0];
// };

// let res = arrowFun(['AIML,CSE,IT', "CSE", "AIML", "IT"]);
// console.log(res);

// 3. Destructuring Operator

// var marks = [90, 95, 93];
// var [m1, m2, m3] = marks;
// console.log(m1, m2, m3);

// 4. Ternary Operator

// a = 10;
// out = a % 2 == 0 ? "Even" : "Odd";
// console.log(a, "is", out);

// 5. Spread Operator

// arr1 = [10, 20, 30];
// arr2 = [...arr1, 40, 50];
// arr2 = [40, 50, 60];
// arr3 = [...arr1, ...arr2];
// console.log(arr3);

// 6.Rest Operator

// 7.Scope

// var a = 5
// const pi = 3.14
// console.log("o",a)
// console.log("o",pi)
// {
//     var a = 10
//     var b = 10.5
//     console.log("a",a);
//     console.log("b",b);
// }
// console.log("o",a)
// console.log("o",pi)

// 8. Hoisting
console.log(a);
var a = 10;
console.log(a);

console.log(a);
const a = 10;
console.log(a);

// Output: ReferenceError: Cannot access 'a' before initialization

console.log(a);
let a = 10;
console.log(a);

// Output: SyntaxError: Identifier 'a' has already been declared


