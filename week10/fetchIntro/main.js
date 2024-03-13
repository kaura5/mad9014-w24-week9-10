const APP = {
  url: "https://jsonplaceholder.typicode.com/users",
  init: function () {
    APP.fetchExample();
    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", APP.url);
    // xhr.onreadystatechange = function () {
    //   console.log(xhr.readyState);
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       //JSON.parse()
    //       console.log(JSON.parse(xhr.responseText));

    //     }
    //   }
    // };

    // xhr.onerror = function () {};
    // xhr.send(null);
  },
  fetchExample: function () {
    fetch(APP.url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

window.addEventListener("DOMContentLoaded", APP.init);
