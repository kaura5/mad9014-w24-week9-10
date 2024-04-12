const APP = {
  urlsToCache: [
    "https://images.unsplash.com/photo-1712287633648-0c0f556d88ec?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712251351568-1c56602c31aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712371963079-6d3a77f70e50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712371963992-270529514219?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  CACHENAME: "IMG-CACHE-W24",
  CACHE: null, //cache ref
  init: async function () {
    APP.CACHE = await caches.open(APP.CACHENAME);
    APP.saveToCache();
    document
      .getElementById("fetchCache")
      .addEventListener("click", APP.fetchedCache);
  },

  fetchedCache: function () {
    console.log("here");
    APP.CACHE.keys()
      .then((keys) => {
        console.log(keys);
        return Promise.all(
          keys.map((request) => {
            console.log(request);
            return APP.CACHE.match(request);
          })
        );
      })
      .then((response) => {
        console.log(response);
        response.map(async function (item, index) {
          let blobData = await item.blob();
          console.log(blobData);
          console.log(URL.createObjectURL(blobData));
        });
      })
      .catch((err) => {
        console.log(err);
        //you are suppose to handle any errors from the server or from then functions and display appropriate message to the user.
      });
  },
  saveToCache: function () {
    //if you are saving just one
    // APP.CACHE.add(src)
    // .then(()=>{
    //     consoale.log("Image saved to cache")
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

    //if I Want to save entire array
    APP.CACHE.addAll(APP.urlsToCache)
      .then(() => {
        console.log("Images have been saved");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

const APP2 = {
  url2: [""],
};
window.addEventListener("DOMContentLoaded", APP.init);
