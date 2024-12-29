async function funName() {
  setTimeout(() => {
    console.log("Hello");
  }, 5000);
  return "Hello";
}

arrowFun = async () => {
  setTimeout(() => {
    console.log("KEC");
  }, 4000);
  return "KEC";
};

funName()
  .then((a) => {
    console.log(a);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(arrowFun());
