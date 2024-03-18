const apiKey = "840f53a055d11884c36946d30fdd8e68";

function init() {
  loadData();
}

function loadData() {
  let BASE_URL = `https://api.themoviedb.org/3/trending/movie/`;
  let time_window = "day"; //week
  fetch(`${BASE_URL}${time_window}?api_key=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayMovie(data.results);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayMovie(results) {
  let div = document.querySelector(".searchResults");

  let df = new DocumentFragment();

  results.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let poster = document.createElement("img");
    let title = document.createElement("h2");

    title.textContent = item.title;
    poster.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${item.poster_path}`
    );
    poster.setAttribute("alt", `${item.title} poster`);
    card.setAttribute("data-id", item.id);
    card.append(poster, title);

    df.append(card);
  });
  //   div.addEventListener("click", showCrew);
  div.append(df);
}

window.addEventListener("DOMContentLoaded", init);
