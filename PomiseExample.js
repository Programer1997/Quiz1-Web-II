function testPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promesa resuelta");
      }, 2000);
      setTimeout(() => {
        reject("Promesa rechazada");
      }, 3000);
    });
  }
  
  testPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });