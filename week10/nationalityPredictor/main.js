(() => {
  document.getElementById("findButton").addEventListener("click", handleFetch);
})();

function handleFetch(ev) {
  ev.preventDefault();
  let userInput = document.getElementById("nameInput").value.trim();
  if (userInput) {
    predicNationality(userInput);
  }
}

function predicNationality(userInput) {
  fetch(`https://api.nationalize.io/?name=${userInput}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let df = new DocumentFragment();
      data.country.forEach(function (item) {
        let list = document.createElement("li");
        let probabilityPercentage = (item.probability * 100).toFixed(2);

        //country name
        let regionNamesInEnglish = new Intl.DisplayNames(["en"], {
          type: "region",
        });
        let countryName = regionNamesInEnglish.of(item.country_id);

        list.textContent = `There is ${probabilityPercentage}% probability that ${userInput} is from ${countryName} country.`;
        df.append(list);
      });
      document.getElementById("results").innerHTML = "";
      document.getElementById("results").append(df);
    })
    .catch((err) => {
      console.log(err);
    });
}
