import React from "react";

const JsAsyncAwait = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const handleUser = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    const data2 = await fetch(API_URL + "/" + jsonData[0]?.id);
    const userData = await data2.json();
    console.log(jsonData, userData);
  };
  handleUser();
  /* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 10000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World 2");
    }, 5000);
  });

  const handlePromise = async () => {
    //new way
    console.log("First line");

    const val = await p1; 
    console.log("Hello Vignesh");
    console.log(val);

    const val2 = await p2;
    console.log("Hello Vignesh2");
    console.log(val2);
  };
  handlePromise(); */
  /* const handleData = () => {
    //old way
    p1.then((res) => console.log(res));
    console.log("Hello Vignesh");
  };
  handleData(); */
  return <div></div>;
};

export default JsAsyncAwait;
