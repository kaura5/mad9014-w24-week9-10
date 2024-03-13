function init() {
  let url = `https://jsonplaceholder.typicode.com/posts`;
  //new Request(url, {options})
  //options - method, header, body
  //methods - GET, POST, PUT, PATCH , DELETE
  //body
  //request object

  let h = new Headers();
  //one way to aff to header
  // h.append("Accept", 'application/json');
  // h.append('Content-Type', 'application/json');

  //second way
  h = {
    "Content-Type": "application/json",
  };

  let post = {
    title: "I am just a test",
    body: "I am the body of the title",
  };

  let req = new Request(url, {
    method: "POST",
    headers: h,
    body: JSON.stringify(post), // Converting the post obj to JSON string
  });

  fetch(req)
    .then((response) => {
      if (!response.ok) {
        throw new Erro("broken");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", init);
