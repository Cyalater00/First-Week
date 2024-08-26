// create a new promise
  const myPromise = new Promise((resolve, reject) => {
    if (!error) {
      setTimeout(() => {
        // doing some data fetching....
        resolve("We got some data!!");
      }, 1000);
    } else {
      reject("Error fetching data");
      // throw new Error("Error fetching data");
    }
  });

  myPromise
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => console.log("Done!"));