let cacheName = "myCache-v1";

let urlString = "./data.json";

caches
  .open(cacheName)
  .then((cache) => {
    console.log(cache);
    cache.add(urlString);
  })
  .catch((err) => {
    console.log(err);
  });

caches
  .match("./data.json")
  .then((response) => {
    if (response) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

caches.keys().then((keys) => {
  Promise.all(
    keys.map((request) => {
      caches.match(request);
      console.log(request);
    })
  );
});

let cachrRef = caches.open("myCache-v2");

cachrRef.then((cache) => {});
