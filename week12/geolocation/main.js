document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log(window);
  let btn = document.getElementById("btn");
  btn.addEventListener("click", showPosition);
}

function showPosition(ev) {
  ev.preventDefault();
  if (navigator.geolocation) {
    let options = {
      maximumAge: 0,
      timeout: 15000,
      enableHighAccuracy: true,
    };
    navigator.geolocation.getCurrentPosition(gotPos, posFail, options);
  } else {
    alert("You have a really old browser");
  }
}

function gotPos(position) {
  console.log(position);
}

function posFail(err) {
  console.log(err);
}
