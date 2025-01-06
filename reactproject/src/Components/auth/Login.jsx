import { useState } from "react";
import "../../assets/css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  var navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var req = await axios.post("https://training-utua.onrender.com/login", formData);
      console.log(req);
      if (req.status === 200 && req.data.isLoggedIn) {
        setFormData({ email: "", password: "" });
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("email", req.data.email);
        alert("Login Successfully");
        navigate("/");
      } else {
        alert(req.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Eamil</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
