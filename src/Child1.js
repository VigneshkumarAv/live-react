/* Parent */
/* import "./App.css";
import React, { useState, useEffect } from "react";
import Child1 from "./Child1";
export const themeContext = React.createContext();
function App() {
const data = "hello"; //data can be anything array,object,string etc.. similar to props
  return (
    <div>
      <themeContext.Provider value={data}>
        <Child1 />
      </themeContext.Provider>
    </div>
  );
}

export default App;
 */

import React, { useContext } from "react";
import { themeContext } from "./App";

const Child1 = () => {
  const data = useContext(themeContext);
  console.log(data);

  return <div>Child</div>;
};

export default Child1;
