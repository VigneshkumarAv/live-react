import React from "react";

const JsCoding = () => {
  [1, 2, 33, 11, 22, 44].sort((a, b) => a - b); ///basic sorting que

  /* ----- */
  //to remove all falsy value from array
  const arr1 = [false, null, 0, "", undefined, NaN, 1, 2, 3];

  console.log(arr1.filter(Boolean));
  /* ------ */
  //count char
  const str1 = "hello hello hello";

  const handleStr = (str) => {
    let charCount = {};
    for (let char of str) {
      if (char !== " ")
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    return charCount;
  };
  console.log(handleStr(str1));
  /*------ */

  console.log(Array.from(new Set([1, 1, 2, 3, 4, 5, 3, 4]))); //remove duplicates from array

  const arr2 = [1, 3, 3, 2, 1];

  const output1 = arr2.filter((item, index) => arr2.indexOf(item) === index); //remove duplicates from array
  console.log(output1);
  /* ------ */
  const reverseString = (str) => {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    return reverse;
  };
  function findMinMax(arr) {
    let min = Math.min(...arr);

    let max = Math.max(...arr);

    return [min, max];
  }
  let arr = [1, 5, 6, 9, 2, 8];
  console.log(findMinMax(arr));
  console.log(reverseString("Hello"));

  /* ------ */
  /* print from 1 to 100 without using loop starts */
  let i = 1;
  const handleData = (i) => {
    if (i > 100) return;
    console.log(i);
    handleData(i + 1);
  };
  handleData(i);
  /* print from 1 to 100 without using loop ends */
  /* recursion starts */
  const handleFactorial = (num) => {
    if (num <= 0) return;

    handleFactorial(num - 1);
    console.log(num * num - 1);
  };
  handleFactorial(5);

  const handleRecursion = (str) => {
    if (str.length <= 1) return str;
    return handleRecursion(str.slice(1)) + str[0];
  };
  console.log(handleRecursion("hello"));

  const obj1 = {
    a: 1,
    b: { c: 2, d: { e: 3 } },
    f: 4,
  };
  const handleObj = (obj) => {
    if (obj !== null && typeof obj !== "object") {
      return obj;
    }
    let sum = 0;
    for (const key in obj) {
      sum = sum + handleObj(obj[key]);
    }
    return sum;
  };
  console.log(handleObj(obj1)); //10

  const tree = {
    id: 1,
    children: [{ id: 2 }, { id: 3, children: [{ id: 4 }] }],
  };
  const handleTree = (tree, id) => {
    if (tree.id === id) return tree;
    if (tree.children) {
      for (const child of tree.children) {
        const result = handleTree(child, id);
        if (result) return result;
      }
    }
    return null;
  };
  console.log(handleTree(tree, 4)); //{id: 4}
  /* recursion ends */

  /* take all keys in obj starts */
  const obj = {
    name: "ram",
    age: 25,
    address: {
      city: "mumbai",
      pin: "123456",
    },
  };

  const handleData = (objValue) => {
    let tempObj = [];
    for (const key in objValue) {
      tempObj.push(key);
      if (typeof obj[key] === "object")
        tempObj = [...tempObj, ...handleData(obj[key])];
    }
    return tempObj;
  };
  console.log(handleData(obj));
  /* take all keys in obj ends */

  /* Object with different values handling starts*/
  /* {data:[1,2,3]}
    {data:"string"}
    {data:{value1:1, value2:2}} */

  function handleData(obj) {
    console.log("calling", obj.data /* Object.values(obj) */);

    if (Array.isArray(obj.data)) {
      //if (Object.values(Array.isArray(data))) {
      console.log(obj.data.reduce((acc, curr) => acc + curr, 0));
    } else if (typeof obj.data === "string") {
      console.log("this is a string");
    } else if (typeof obj.data === "object") {
      console.log(Object.values(obj.data).reduce((acc, curr) => acc + curr, 0));
    }
  }

  handleData({ data: [1, 2, 3] });
  handleData({ data: "string" });
  handleData({ data: { value1: 1, value2: 2 } });
  /* Object with different values handling ends*/

  /* DeepClone Starts*/
  const clone = (obj) => {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    if (obj instanceof Date) {
      return new Date(obj);
    }
    if (Array.isArray(obj)) {
      return obj.map((item) => clone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = clone(obj[key]);
      }
    }
    return clonedObj;
  };

  const original = {
    name: "Alice",
    age: 25,
    date: new Date(),
    skills: ["JS", "React"],
    address: { city: "NY", zip: 10001 },
  };
  const copied = clone(original);
  original.name = "Peter";

  console.log(copied);
  /* Deep Clone Ends */
  /* Map, set, spread operator */
  const mySet = new Set([1, 2, 2, 3]);
  const output = [...mySet];
  console.log(output);

  const myMap = new Map([
    ["name", "vignesh"],
    ["age", 26],
    ["city", "London"],
  ]);
  console.log(myMap.get("city"));

  const defaultValues = { name: "John", age: 40 };
  const updatedValues = { city: "Paris", country: "France" };
  console.log({ ...defaultValues, ...updatedValues });
  //above code output=> { name: 'John', age: 40, city: 'Paris', country: 'France' }

  const defaultValues1 = { name: "John", age: 40 };
  const updatedValues1 = { ...defaultValues };
  console.log({ ...defaultValues1, ...updatedValues1 }); //{ name: 'John', age: 40 }

  /* Longest char in string starts*/
  const str = "aaabbcddddeeeee";
  let currChar = str[0];
  let count = 0;
  let maxChar;
  let maxCount = 0;
  for (let char of str) {
    if (currChar === char) {
      count++;
    } else {
      if (count > maxCount) {
        maxCount = count;
        maxChar = currChar;
      }
      count = 1;
      currChar = char;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    maxChar = currChar;
  }
  let longestStartingIndex = str.indexOf(maxChar);
  console.log(
    maxCount,
    str.slice(longestStartingIndex, longestStartingIndex + maxCount)
  );
  /* longest char in string ends */
  /* Array [4,5,6,7,5,4] => [4,5] return repeating duplicate element */
  // we can use reduce to find duplicate element

  return <div></div>;
};

export default JsCoding;
