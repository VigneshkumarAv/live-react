import React from "react";

const callFunction = () => {
  function x() {
    for (let i = 1; i <= 5; i++) {
      //let i variable each time will be stored in different memory space
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }

  useEffect(() => {
    x();
  }, []);

  return <div></div>;
};

export default callFunction;
