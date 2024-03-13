import { cars } from "./data.js";
console.log(cars);

let carList = document.querySelector(".car-list");
let carDetails = document.getElementById("car-details");

carList.addEventListener("click", pickedListItem);

let df = new DocumentFragment();
console.log("I am before the loop");
cars.forEach(function (item) {
  let carItem = document.createElement("li");
  carItem.textContent = item.carModal;
  //create a custom attribute
  //data-
  carItem.setAttribute("data-make", item.make);
  carItem.setAttribute("data-year", item.year);

  console.log("I am with in loop");
  //appending all the info in the memory
  df.append(carItem);
});
console.log("I am after the loop");
//appending/repainting the DOM
carList.append(df);

function pickedListItem(ev) {
  console.log(ev.target);

  //matches
  if (ev.target.matches("li")) {
    let pickedCar = ev.target;
    let carMake = pickedCar.getAttribute("data-make");
    let carYear = pickedCar.getAttribute("data-year");
    console.log(pickedCar.textContent);
    let carModal = pickedCar.textContent;

    carDetails.innerHTML = `<p>${carModal} is build by ${carMake} in the year ${carYear}.</p>`;
  } else {
    carDetails.innerHTML = `<p>Make sure to click on the car name.</p>`;
  }
}
