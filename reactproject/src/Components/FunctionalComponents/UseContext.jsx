import React from "react";
import Component2 from "./ContextComponents/Component2";

export var ThemeProvider = React.createContext();
const UseContext = () => {
  return (
    <div>
      <ThemeProvider.Provider value={{ cgpa: "7.89" }}>
        <h1>This is an Example of useContext</h1>
        <Component2 />
      </ThemeProvider.Provider>
    </div>
  );
};

export default UseContext;
