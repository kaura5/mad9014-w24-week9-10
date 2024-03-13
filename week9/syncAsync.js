//make a function that can be called to create a delay
function delay(len) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
      //call the resolve method after `len` milliseconds have passed
    }, len);
  });
}

//function ready to be paused
let res = async () => {
  //this first call will run 1 second in the future
  let isReady = delay(1000);
  console.log(isReady); // `pending Promise` at this point. Not resolved yet.

  //try again with await
  //now pause the function and wait for a result
  let isReadyNow = await delay(1000); //function actually pauses to wait for the result from delay()
  console.log(isReadyNow); //`true`
  //isReadyNow actually has a value this time because of await.
};

res();
