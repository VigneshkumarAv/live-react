import React from "react";

const reduceEg = () => {
  console.log(1 + +"1" + "2"); // -> '22'
  console.log(1 + +"2" - "2" + "A"); // -> '1A'
  //console.log([] === []); // -> false it is stored in different memory space. arrays are reference type
  console.log(typeof []); // -> object

  console.log("A");
  setTimeout(function () {
    console.log("B");
  }, 100);
  setTimeout(function () {
    console.log("C");
  }, 0);
  Promise.resolve().then(function () {
    console.log("D");
  });
  console.log("E");

  //  answer -> AEDCB

  // Flatten Array without loop
  const array = [1, [2, [3, [4, 5]]], 6];
  // this is expected recursion
  const handleArr = (arr) => {
    return arr.reduce((acc, curr) => {
      acc = Array.isArray(curr) ? [...acc, ...handleArr(curr)] : [...acc, curr];
      return acc;
    }, []);
  };
  // Output: [1, 2, 3, 4, 5, 6]
  const res = array.flat(Infinity);
  array.toString().split(",").map(Number);

  const data = [
    { name: "Swapnil", age: 34 },
    { name: "Ashay", age: 28 },
    { name: "Dhiraj", age: 30 },
  ];

  // [ 'Swapnil', 'Ashay', 'Dhiraj' ]
  const result = data.reduce((acc, curr) => {
    acc = [...acc, curr.name];
    return acc;
  }, []);

  // find repeated item
  const array1 = [
    "TV",
    "TV",
    "Laptop",
    "Phone",
    "Phone",
    "Microwave",
    "Laptop",
  ];
  //method0
  const handleArr0 = (arr) => {
    return arr.reduce((acc, curr) => {
      // If the item is already in the accumulator, increment its count; otherwise, set it to 1
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  };
  //method1
  const handleArr1 = (arr) => {
    return arr.reduce((acc, curr) => {
      if (acc[curr] > 0) {
        acc[curr] = ++acc[curr];
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
  };
  //method 2
  const handleArr2 = (arr) => {
    return arr.reduce((acc, curr) => {
      acc = !acc[curr]
        ? { ...acc, [curr]: 1 }
        : { ...acc, [curr]: acc[curr] + 1 };
      return acc;
    }, {});
  };
  console.log(handleArr1(array1));
  // output: { TV: 2, Laptop: 2, Phone: 2, Microwave: 1 }

  const a = [null, "test", 1, 4, 2, 0, "abc", 11, null];
  let first = a.filter((item) => item === null);
  let num = a.filter((item) => typeof item === "string").sort();
  let str = a.filter((item) => typeof item === "number").sort((a, b) => a - b);
  const final = [...first, ...num, ...str];
  console.log(first, num, str, final);

  return <div></div>;
};

export default reduceEg;
