console.log("I am the start of the file.");

let p = new Promise(function (resolve, reject) {
  let age = 25;
  resolve(age);
});

console.log("I am after promise");

p.then(function (str) {
  console.log(str);
  return str * 2;
})
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("I am from catch");
  })
  .finally(function () {
    console.log("I will run everytime.");
  });

console.log("last one");

//all and allSettled
let p1 = new Promise((resolve, reject) => {
  reject("I am from p1");
});
let p2 = new Promise((resolve, reject) => {
  reject("I am from p2");
});
let p3 = new Promise((resolve, reject) => {
  reject("I am from p3");
});

Promise.allSettled([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("something didnot go well");
  });
