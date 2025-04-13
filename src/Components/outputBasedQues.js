import React from "react";

const outputBasedQues = () => {
  /* ---- */
  const clothes = ["jacket", "t-shirt"];
  clothes.length = 0;
  console.log(clothes[0], clothes); // undefined,[]
  /* --- */
  let num = 10;
  const increaseNumber = () => num++; //post increment will happen, num will be update to 11 post returning the value.
  const increasePassedNumber = (number) => number++; // primitive values are passed by values not by reference
  const num1 = increaseNumber(); //10
  const num2 = increasePassedNumber(num1);
  console.log(num1); //10
  console.log(num2); //10
  /* ---- */ //delete operator removes a property from an object.
  //delete only works on properties, not variables declared with let, const, or var.
  //Variables declared with const or let are not deletable — they are not properties of the global object.
  const name = "Lydia";
  age = 21; //added in window or global object in javascript
  // console.log(delete name); // false => var,let, const cannot be deleted
  // console.log(delete age); // true => as it is added to global object as a property it will be deleted
  /* ---- */
  function getInfo(member, year) {
    member.name = "Lydia";
    year = "1998";
  }
  const person = { name: "Sarah" }; //obj are pass by reference in js
  const birthYear = "1997"; // primitive values are pass by value

  getInfo(person, birthYear);

  console.log(person, birthYear); // {name: Lydia}, "1997"
  /* ---- */

  return <div></div>;
};

export default outputBasedQues;
