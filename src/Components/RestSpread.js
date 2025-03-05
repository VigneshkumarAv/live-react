import React from "react";

const RestSpread = () => {
  const arr = [1, 2, 3];
  const [one, two, ...other] = arr;
  const user = {
    name: "vignesh",
    city: "chennai",
  };
  const arr2 = [4, 5, 6];
  const arr3 = [...arr, ...arr2];
  const { name, ...rest } = user;
  console.log("calling", rest, other);

  const handleArr = (...value) => {
    console.log(value);
  };
  handleArr(1, 2, 3);
  const handleArr2 = (a, b, c) => {
    console.log("arr2", a, b, c);
  };
  handleArr2(...arr);
  return (
    <div>
      <p>{one}</p>
      <p>{two}</p>
      <p>{other}</p>
      <p>
        {name},{rest.city}
      </p>
      {arr3}
    </div>
  );
};

export default RestSpread;
