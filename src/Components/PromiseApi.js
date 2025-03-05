import React from "react";

const PromiseApi = () => {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P1 Success");
    }, 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("P2 Success");
      reject("P2 fail");
    }, 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P3 Success");
    }, 2000);
  });

  Promise.all([p1, p2, p3])
    .then((res) => {
      console.log("promise.all", res);
    })
    .catch((err) => {
      console.error("promise.all", err);
    });

  Promise.allSettled([p1, p2, p3])
    .then((res) => {
      console.log("promise.allSettled", res);
    })
    .catch((err) => {
      console.error("promise.allSettled", err);
    });

  Promise.race([p1, p2, p3])
    .then((res) => {
      console.log("promise.race", res);
    })
    .catch((err) => {
      console.error("promise.race", err);
    });

  Promise.any([p1, p2, p3])
    .then((res) => {
      console.log("promise.any", res);
    })
    .catch((err) => {
      console.error("promise.any", err);
    });

  return <div></div>;
};

export default PromiseApi;
