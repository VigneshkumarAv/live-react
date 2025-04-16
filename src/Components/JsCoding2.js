import React from "react";

const JsCoding2 = () => {
  /* ------ */ // version 1 using global variables
  const obj = { a: { b: { c: 1 } } };
  //output { 'a.b.c': 1 }
  let res = {};
  let fullKey = "";
  const flattenObj = (obj) => {
    for (const key in obj) {
      fullKey = fullKey ? `${fullKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObj(obj[key]);
      } else {
        res[fullKey] = obj[key];
      }
    }
    return res;
  };
  console.log(flattenObj(obj));
  /* ----- */ //Version 2 best version using params

  const obj1 = { a: { b: { c: 1 } } };
  //output { 'a.b.c': 1 }

  const flattenObj1 = (obj, prefix = "", res = {}) => {
    for (const key in obj) {
      let fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObj(obj[key], fullKey, res);
      } else {
        res[fullKey] = obj[key];
      }
    }
    return res;
  };
  console.log(flattenObj1(obj1));
  /* ------ */
  function once(fn) {
    // once function it will be executed once
    let called = false;
    let result;
    return function (...args) {
      if (!called) {
        called = true;
        result = fn.apply(this, args);
      }
      return result;
    };
  }
  function greet(name) {
    return name;
  }
  const output = once(greet);

  console.log(output("hello"), output("world"));
  /* ------- */
  // Online Javascript Editor for free
  // Write, Edit and Run your Javascript code using JS Online Compiler

  function throttle(fn, delay) {
    let isThrottled = false;
    return function (...args) {
      if (!isThrottled) {
        isThrottled = true;
        fn.apply(this, args);
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    };
  }
  const greet = () => {
    console.log("only will be called 3 secs once using settimeout");
  };
  const throttleGreet = throttle(greet, 3000);
  setInterval(() => {
    throttleGreet();
  }, 500);
  console.log("Try programiz.pro");
  /* ----- */ //method2
  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      let now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn.apply(this, args);
      }
    };
  }
  const greet = () => {
    console.log("Will be called every 3 secs only");
  };
  const throttleGreet1 = throttle(greet, 3000);

  setInterval(() => {
    throttleGreet1();
  }, 500);

  /* ----- */
  let obj2 = { name: "abc", age: "18", city: "pune", state: "maharashtra" };
  // sort based on key
  const handleObj = (obj) => {
    let arr1 = Object.keys(obj).sort();

    let obj1 = {};
    for (const key of arr1) {
      obj1[key] = obj[key];
    }
    console.log(obj1);
  };

  handleObj(obj2);
  /* ------- */
  return <div></div>;
};

export default JsCoding2;
