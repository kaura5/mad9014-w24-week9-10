const apiKey = "840f53a055d11884c36946d30fdd8e68";

function init() {
  window.addEventListener("popstate", popin);
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
      history.pushState(data, null, "#trending");
      displayMovie(data.results);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayMovie(results) {
  let div = document.querySelector(".searchResults");
  div.innerHTML = "";

  let df = new DocumentFragment();

  results.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let poster = document.createElement("img");
    let title = document.createElement("h2");

    title.textContent = item.title;
    poster.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
    );
    poster.setAttribute("alt", `${item.title} poster`);
    card.setAttribute("data-id", item.id);
    card.append(poster, title);

    df.append(card);
  });
  div.addEventListener("click", showCrew);
  div.append(df);
}

function showCrew(ev) {
  console.log(ev.target.closest(".card"));
  let id = ev.target.closest(".card").getAttribute("data-id");

  if (id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        history.pushState(data, null, "#cast");
        displayCast(data.cast);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function displayCast(cast) {
  let div = document.querySelector(".searchResults");

  div.innerHTML = "";

  let df = new DocumentFragment();
  cast.forEach((castMember) => {
    let card = document.createElement("div");
    let cardInfo = `
  <img src="https://image.tmdb.org/t/p/w200/${castMember.profile_path}" alt="poster of ${castMember.name}">
  <p>Name: ${castMember.name}</p>
  <p>Character Name: ${castMember.character}</p>
  `;
    card.innerHTML = cardInfo;
    df.append(card);
  });
  div.append(df);
}

function popin(ev) {
  console.log(ev);
  console.log(location.hash);
  if (location.hash === "#trending") {
    displayMovie(ev.state.results);
  } else if (location.hash === "#cast") {
    displayCast(ev.state.cast);
  }
}
window.addEventListener("DOMContentLoaded", init);
