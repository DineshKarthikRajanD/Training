import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  var [text, setText] = useState("");
  var [num, setNum] = useState(0);
  var prevText = useRef("");
  var prevNum = useRef("");
  useEffect(() => {
    prevText.current = text;
    prevNum.current = num;
  }, [text, num]);
  return (
    <div>
      <h1>This is an example of useRef</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <h2>My Current Render is {text}</h2>
      <h3>My Previous Render is {prevText.current}</h3>
      <h2>My Current Render is {num}</h2>
      <h3>My Previous Render is {prevNum.current}</h3>
    </div>
  );
};

export default UseRef;
