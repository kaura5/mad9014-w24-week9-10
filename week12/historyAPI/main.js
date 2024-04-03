// history.back();
// history.forward();
// history.go(-3);
// history.length;

// console.log(history.state);
// console.log(history);
// console.log(location);

// let data = {
//   name: "anoop",
//   isStudent: true,
// };

// //history.replaceState
// //history.pushState(state, title, url)
// history.replaceState(data, null, "#replaced");

// console.log(history.state);

// history.pushState(data, null, "#push");
console.log(window);

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("popstate", popin);
  let initialData = {
    headingText: "Home",
  };
  history.replaceState(initialData, null, "#test");

  document.querySelector(".stores").addEventListener("click", function (ev) {
    ev.preventDefault();
    let storeData = {
      headingText: "Stores",
    };
    history.pushState(storeData, null, "#stores");
  });

  function popin(ev) {
    console.log(ev.state);
    if (ev.state) {
      document.querySelector("h1").textContent = ev.state.headingText;
    }
  }
});
