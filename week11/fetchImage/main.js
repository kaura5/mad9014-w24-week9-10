function init() {
  fetch("https://picsum.photos/200/300")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.blob();
    })
    .then((data) => {
      console.log(data);
      console.log(URL.createObjectURL(data));
      let imageURL = URL.createObjectURL(data);
      displayImage(imageURL);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayImage(imageURL) {
  let img = document.createElement("img");
  img.setAttribute("src", imageURL);
  img.setAttribute("alt", "");
  document.querySelector("main").append(img);
}

window.addEventListener("DOMContentLoaded", init);
