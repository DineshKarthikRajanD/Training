import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  var navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var req = await axios.post("http://localhost:3001/signup", formData);
      console.log(req);
      setFormData({ userName: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    // alert(`Register Successfully ${formData.userName}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        <label htmlFor="">Email</label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
