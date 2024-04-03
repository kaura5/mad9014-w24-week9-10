document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("popstate", popin);
  document.querySelector("nav").addEventListener("click", handleNavClick);

  function handleNavClick(ev) {
    ev.preventDefault();
    let url = ev.target.closest(".nav-link").getAttribute("data-url");
    console.log(url);
    updateActiveButton(url);
    history.pushState(url, null, url);
    loadContent(url);
  }

  function loadContent(url) {
    document.querySelector("h2").textContent = url;
    //find the document
    //create new elements
    //append
  }

  function popin(ev) {
    console.log(ev.state);
    if (ev.state) {
      updateActiveButton(ev.state);
      loadContent(ev.state);
    }
  }

  function updateActiveButton(url) {
    //remove active from all of them
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });
    //find the one which was clicked then add active to it
    let activeLink = document.querySelector(`.nav-link[data-url="${url}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
});
