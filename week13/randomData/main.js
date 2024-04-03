document.addEventListener("DOMContentLoaded", () => {
  let baseURL = "https://random-data-api.com/api/v2/";

  let query = "users?size=10&response_type=json";

  let url =
    "https://random-data-api.com/api/v2/users?size=10&response_type=json";
  console.log(url);

  //   let url = new URL(query, baseURL);

  let url1 = new URL("beers", baseURL);
  //   let params = new URLSearchParams({
  //     size: 10,
  //     response_type: "json",
  //   });
  let params = new URLSearchParams();
  params.set("size", 10);
  params.set("response_type", "json");
  url1.search = params;
  console.log(url1);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("something bad happenned");
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
