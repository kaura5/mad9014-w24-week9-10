async function doSomething() {
  let result = await someFunctionThatReturnsAPromise()
    .then((result) => {
      return result; //pass to then next then()
    })
    .then((result) => {
      return result; //actually pass the result to `result`
    });
  //now because of the await, `result` will have the return value from the 2nd then()
  console.log(result);
}
//without the async and await, console.log will be pending
//with it will give us result back.
doSomething();
