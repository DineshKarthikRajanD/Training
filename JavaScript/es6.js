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
// console.log(a);
// var a = 10;
// console.log(a);

// console.log(a);
// const a = 10;
// console.log(a);

// Output: ReferenceError: Cannot access 'a' before initialization

// console.log(a);
// let a = 10;
// console.log(a);

// Output: SyntaxError: Identifier 'a' has already been declared

// Rest Operator

// function restOperator(a, b, ...arr) {
//   console.log(arr);
//   combinedarr = [a, b, ...arr];
//   console.log(combinedarr);
// }
// restOperator("dinesh", "anand", "ajay", "adi", "karthik");

// 4 types of arrow function

// 1 without arugment and paramerter and without return type

arrow1 = () => {
  console.log("arrow1: hi");
};

//with return type

arrow2 = () => {
  var a = 10;
  return a;
};

// 2 with arugment and paramerter and without return type

arrow3 = (a, b) => {
  console.log("arrow3",a + b);
};

//with return type

arrow4 = (a, b) => {
  return a + b;
};

arrow1();
res1 = arrow2();
console.log("arrow2",res1);
arrow3(5, 10);
res2 = arrow4(5, 10);
console.log("arrow4",res2);
