//spread
let numbers = [1, 2, 4, 5];
function f1(a, b, c) {
  console.log(a, b, c);
}
f1(...numbers);

let students = [106754, 67526];
let madd = [...students, ...numbers, 76845];
console.log(madd);

let obj1 = {
  id: 123,
  name: "John",
};

let obj2 = { ...obj1, city: "Ottawa" };
console.log(obj2);

//rest
function f2(greet, ...name) {
  console.log(name);
  console.log(greet, name.join(", "));
}

f2("Hello", "Johm", "Sam", "Josh");
let movie = {
  id: 12345,
  title: `Prometheus`,
  director: `Ridley Scott`,
  //property with nested array
  cast: [`Noomi Rapace`, `Jenny Rainsford`, `Charlize Theron`, `Idris Elba`],
  //property with nested object
  meta: {
    mpaaRating: "R",
    genres: ["Adventure", "Sci-fi", "Mystery"],
  },
};

function info({ title, cast: [first, second, ...third], meta: { genres } }) {
  console.log(title);
  console.log(third);
  console.log(genres);
}

info(movie);
