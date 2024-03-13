let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from Source A");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from Source B");
  }, 1000);
});

//Race will give us the firts result back.... good or bad
Promise.race([p2, p1])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
    console.log("First one back was rejected");
  });

// Promise.any([p1, p2])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     // console.log(err)
//     console.log("no successful results");
//   });
