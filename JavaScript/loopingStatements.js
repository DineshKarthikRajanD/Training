array = [10, 20, 30, [40.5, 50.6], "a", "KEC", true];
// console.log(array);

// 1.for...in Loop

// for (var a in array) {
//   console.log("Element present in index",a,"is",array[a]);
// }

// 2.for...of Loop

// for (var b of array)
// {
//     console.log(b)
// }

// 3.forEach
// example1

// array.forEach((element, index) => {
//   console.log("Element is", element, "and it's index is", index);
// });

//example2

obj = {
  firstName: "Jai",
  lastName: "Kumar",
  age: 20,
};

// console.log(obj.age);

// Object.keys(obj).forEach((value) => {
//   console.log(`${key}: ${obj[value]}`);
// });

// for (const value of obj) {
//   console.log(value);
// }

// TypeError: obj is not iterable

for (key in obj) {
  value = obj[key];
  console.log(key, value);
}
