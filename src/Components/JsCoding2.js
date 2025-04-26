import React from "react";

const JsCoding2 = () => {
  /* ------ */

  const str = "This is the JS guide, Developer!";
  //output => sihT si eht SJ ,ediug !repoleveD
  const arr5 = str.split(" ");
  const output1 = arr5.map((item) => item.split("").reverse().join(""));
  console.log(output1.join(" "));

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
  //method2 to sort based on key
  const ob = {
    name: "avvignesh",
    age: 26,
    city: {
      address: "mumbai",
      pin: 638002,
    },
  };
  console.log(Object.entries(ob).sort()); //[["name":vignesh],["age":26] etc..] it will sort based on the first element in array (i.e key)
  console.log(Object.fromEntries(Object.entries(obj).sort())); //converting array to object back

  const handleObj = (obj) => {
    let arr1 = Object.keys(obj).sort();

    let obj1 = {};
    for (const key of arr1) {
      obj1[key] = obj[key];
    }
    console.log(obj1);
  };

  handleObj(obj2);

  /* ------- */ //next is object+array mix ques
  const orders = [
    { userId: "u1", orderId: "o1", amount: 250 },
    { userId: "u2", orderId: "o2", amount: 150 },
    { userId: "u1", orderId: "o3", amount: 400 },
    { userId: "u3", orderId: "o4", amount: 900 },
    { userId: "u2", orderId: "o5", amount: 300 },
    { userId: "u1", orderId: "o6", amount: 50 },
  ];
  /* ---- */ //groupby userid & sortby amount
  let obj4 = {};
  for (const { userId, orderId, amount } of orders) {
    /*if(Array.isArray(obj[val.userId])){
      obj[val.userId] = [...obj[val.userId],val];    
      }else{
      obj[val.userId] = [val];
      }*/
    if (!obj4[userId]) obj4[userId] = [];
    obj4[userId].push({ orderId, amount });
  }
  for (const user in obj4) {
    obj4[user] = obj4[user].sort((a, b) => b.amount - a.amount);
  }

  /* ------ */
  let obj3 = {}; //with total Amount calc
  for (const val of orders) {
    if (typeof obj3[val.userId] === "object") {
      obj3[val.userId] = {
        totalAmount: obj3[val.userId].totalAmount + val.amount,
        orders: [...obj3[val.userId].orders, val],
      };
    } else {
      obj3[val.userId] = { totalAmount: val.amount, orders: [val] };
    }
  }
  for (const key in obj3) {
    obj3[key].orders = obj3[key].orders.sort((a, b) => b.amount - a.amount);
  }
  const sortedEntries = Object.entries(obj3).sort(
    ([, a], [, b]) => b.totalAmount - a.totalAmount
  );
  console.log(sortedEntries);
  const finalOut = Object.fromEntries(sortedEntries);
  console.log(finalOut);

  /*expected output=>{
    u1: [
      { orderId: 'o3', amount: 400 },
      { orderId: 'o1', amount: 250 },
      { orderId: 'o6', amount: 50 }
    ],
    u2: [
      { orderId: 'o5', amount: 300 },
      { orderId: 'o2', amount: 150 }
    ],
    u3: [
      { orderId: 'o4', amount: 100 }
    ]
  }*/
  /* ----- */
  //Nested Comments Flattening
  const comments = [
    {
      id: 1,
      text: "First",
      replies: [
        { id: 2, text: "First - Reply 1", replies: [] },
        {
          id: 3,
          text: "First - Reply 2",
          replies: [{ id: 4, text: "Nested reply", replies: [] }],
        },
      ],
    },
    {
      id: 5,
      text: "Second",
      replies: [],
    },
  ];
  const outputArr = [];
  const handleComments = (comments) => {
    for (const { id, text, replies } of comments) {
      outputArr.push({ id, text });
      replies?.length > 0 && handleComments(replies);
    }
  };
  handleComments(comments);
  console.log(outputArr);
  /* expected op->  [
    { id: 1, text: "First" },
    { id: 2, text: "First - Reply 1" },
    { id: 3, text: "First - Reply 2" },
    { id: 4, text: "Nested reply" },
    { id: 5, text: "Second" }
  ]
 */
  /* ----- */
  //Convert it to a lookup object where the key is the id, and the value is the full user object.
  const users = [
    { id: "u1", name: "Alice" },
    { id: "u2", name: "Bob" },
    { id: "u3", name: "Charlie" },
  ];
  /*{
    u1: { id: 'u1', name: 'Alice' },
    u2: { id: 'u2', name: 'Bob' },
    u3: { id: 'u3', name: 'Charlie' }
  }*/
  const outputObj = {};
  for (const val of users) {
    outputObj[val.id] = val;
  }
  console.log("Try programiz.pro", outputObj);

  /* ----- */ // Frequency Count with Sort
  const votes = ["apple", "banana", "apple", "orange", "banana", "apple"];
  const freqCount = {};
  /*[{ item: 'apple', count: 3 },
    { item: 'banana', count: 2 },
    { item: 'orange', count: 1 }]*/
  for (const val of votes) {
    freqCount[val] = freqCount[val] ? freqCount[val] + 1 : 1;
  }
  const freqOutput = Object.entries(freqCount)
    .map(([item, count]) => ({ item, count }))
    .sort((a, b) => b.count - a.count);
  console.log(freqOutput);

  /* ----- */
  //Merge Two Arrays of Objects by Key
  const arr1 = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
  ];

  const arr2 = [
    { id: 1, price: 100 },
    { id: 2, price: 60 },
  ];
  /*[{ id: 1, name: 'Apple', price: 100 },
    { id: 2, name: 'Banana', price: 60 }]*/

  /* let outArrObj = [];
   for(const val1 of arr1){ //brute force
      for(const val2 of arr2){    
          if(val1.id === val2.id)
              outArrObj.push({...val1,...val2});
      }
  } console.log(outArrObj); */
  const map = new Map(); //1=> { id: 1, name: 'Apple' },2=> { id: 2, name: 'Banana' }
  for (const obj of arr1) {
    map.set(obj.id, { ...obj });
  }
  for (const obj of arr2) {
    if (map.has(obj.id)) {
      Object.assign(map.get(obj.id), obj);
    } else {
      map.set(obj.id, { ...obj });
    }
  }

  console.log(Array.from(map.values()));

  /* ----- */
  //Find Duplicate Objects by Value
  const products = [
    { id: 1, name: "Book", price: 10 },
    { id: 2, name: "Pen", price: 5 },
    { id: 3, name: "Book", price: 10 },
    { id: 4, name: "Notebook", price: 15 },
    { id: 5, name: "Pen", price: 5 },
  ];
  /*[{ name: "Book", price: 10 },
  { name: "Pen", price: 5 }]*/
  const seen = new Map();
  const duplicates = new Set();
  for (const obj of products) {
    const key = JSON.stringify({ name: obj.name, price: obj.price });
    if (seen.has(key)) {
      duplicates.add(key);
    } else {
      seen.set(key, obj);
    }
  }
  console.log(duplicates);
  console.log(Array.from(duplicates).map((key) => JSON.parse(key)));
  /* ----- */
  const arr = [1, 2, 3, 4, 3, 4, 3]; // getting duplicates from array
  const duplicate = arr.filter((item, index) => arr.indexOf(item) !== index);
  console.log([...new Set(duplicate)]);
  /* ----- */

  /* ----- */
  return <div></div>;
};

export default JsCoding2;
