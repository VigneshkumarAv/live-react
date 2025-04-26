import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(40);
  //const reset = useRef(false); // to track if reset happened
  let reset = false; //check for better code but this is working fine
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 25 && !reset) {
            reset = true;
            return 30;
          } else if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
};

export default Timer;
