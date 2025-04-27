import React, { useEffect } from "react";
/* App.js
 const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <CancelApi />}
    </div>
  );
  */
const CancelApi = () => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const handleData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            signal,
          }
        );
        const jsonData = await response.json();
      } catch (err) {
        if (err.name === "AbortError") console.log(err);
      }
    };
    handleData();
    return () => controller.abort();
  }, []);
  return <div>Hello</div>;
};

export default CancelApi;
