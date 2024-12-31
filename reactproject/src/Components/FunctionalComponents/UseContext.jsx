import { createContext } from "react";
import Component2 from "./ContextComponents/Component2";

const UseContext = () => {
  // var ThemeProvider = createContext()
  return (
    <div>
      <h1>This is an Example of useContext</h1>
      <Component2 />
    </div>
  );
};

export default UseContext;
