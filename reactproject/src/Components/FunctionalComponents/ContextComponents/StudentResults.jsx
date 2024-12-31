import { useContext } from "react";
import { ThemeProvider } from "../UseContext";

const StudentResults = () => {
  var res = useContext(ThemeProvider);
  return (
    <div>
      <h3>Your Result is {res.cgpa}</h3>
    </div>
  );
};

export default StudentResults;
